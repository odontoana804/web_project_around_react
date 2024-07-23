import { useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [errorMessage, setErrorMEssage] = useState({
    name: "",
    link: "",
  });

  const [loading, setLoading] = useState(false);

  const [validForm, setValidForm] = useState({
    name: false,
    link: false,
  });

  const isValidForm = () => {
    return validForm.name && validForm.link;
  };

  const handleNameChange = (evt) => {
    setName(evt.target.value);
    setErrorMEssage({
      ...errorMessage,
      name: evt.target.validationMessage,
    });
    setValidForm({
      ...validForm,
      name: evt.target.validity.valid,
    });
  };

  const handleLinkChange = (evt) => {
    setLink(evt.target.value);
    setErrorMEssage({
      ...errorMessage,
      link: evt.target.validationMessage,
    });
    setValidForm({
      ...validForm,
      link: evt.target.validity.valid,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);

    onAddPlaceSubmit({
      name,
      link,
    });
  };

  return (
    <PopupWithForm
      title="Nuevo lugar"
      name="place"
      buttonText={loading ? "Guardando..." : "Crear"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValidForm}
    >
      <input
        className={errorMessage.name ? "place-popup__input place-popup__input_type_error" : "place-popup__input"}
        placeholder="Título"
        type="text"
        id="name-place"
        minLength="2"
        maxLength="30"
        required
        name="name"
        value={name}
        onChange={handleNameChange}
      />
      <span className="place-popup__input-error_active">
        {errorMessage.name}
      </span>
      <input
        className={errorMessage.link ? "place-popup__input place-popup__input_type_error" : "place-popup__input"}
        placeholder="Enlace a la imagen"
        type="url"
        id="link-place"
        required
        name="link"
        value={link}
        onChange={handleLinkChange}
      />
      <span className="place-popup__input-error_active">
        {errorMessage.link}
      </span>
    </PopupWithForm>
  );
}
