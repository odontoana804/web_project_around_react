import { useContext, useEffect, useState } from 'react'
import PopupWithForm from './PopupWithForm'
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = useContext(CurrentUserContext);

    useEffect(() => {
        setName(currentUser.name);
        setAbout(currentUser.about);
      }, [currentUser]);

    const [name, setName] = useState("")
    const [about, setAbout] = useState("")

    const handleNameChange = (evt) => {
        setName(evt.target.value)
    };

    const handleAboutChange = (evt) => {
        setAbout(evt.target.value)
    };

    const handleSubmit = (evt) => {
      evt.preventDefault();
    
      onUpdateUser({
        name,
        about
      });
    }

  return (
   
    <PopupWithForm
        title="Editar Perfil"
        name="profile"
        buttonText="Guardar"
        isOpen={isOpen}
        onClose={onClose}
        onSubmit={handleSubmit}
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
        <span className="profile-popup__input-error name-profile-input-error"></span>
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
        <span className="profile-popup__input-error about-profile-input-error"></span>
    </PopupWithForm>

  )
}
