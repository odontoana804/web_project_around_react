import { useContext, useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

  const currentUser = useContext(CurrentUserContext);

  useEffect(() => {
      setName(currentUser.name);
      setAbout(currentUser.about);
    }, [currentUser]);

  const [name, setName] = useState("");
  const [about, setAbout] = useState("");
  const [errorMessage, setErrorMEssage] = useState({
    name: "",
    about:""
  });
  const [loading, setLoading] = useState(false);

  const [validForm, setValidForm] = useState({
    name: false,
    about: false
  });

  const isValidForm = () => {
    return validForm.name || validForm.about
  };

  const handleNameChange = (evt) => {
      setName(evt.target.value);
      setErrorMEssage({
        ...errorMessage,
        name: evt.target.validationMessage
      })
      setValidForm({
        ...validForm,
        name: evt.target.validity.valid
      });
  };

  const handleAboutChange = (evt) => {
      setAbout(evt.target.value);
      setErrorMEssage({
        ...errorMessage,
        about: evt.target.validationMessage
      })
      setValidForm({
        ...validForm,
        about: evt.target.validity.valid
      });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true)
  
    onUpdateUser({
      name,
      about
    });
  };

  return (
   
    <PopupWithForm
      title="Editar Perfil"
      name="profile"
      buttonText={loading ? "Guardando..." : "Guardar"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValidForm}
    >
      <input
        className="profile-popup__input"
        placeholder="Nombre"
        type="text"
        id="name-profile"
        minLength="2"
        maxLength="40"
        required
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <span className="profile-popup__input-error_active">{errorMessage.name}</span>
      <input
        className="profile-popup__input"
        placeholder="Acerca de mí"
        type="text"
        id="about-profile"
        minLength="2"
        maxLength="200"
        required
        name="about"
        value={about}
        onChange={handleAboutChange}
      />
      <span className="profile-popup__input-error_active">{errorMessage.about}</span>
    </PopupWithForm>
  );
}
