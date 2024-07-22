import { useState } from "react";
import PopupWithForm from "./PopupWithForm";


export default function AddPlacePopup({ isOpen, onClose, onAddPlaceSubmit }) {

  const [name, setName] = useState("");
  const [link, setLink] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleLinkChange = (evt) => {
    setLink(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  
    onAddPlaceSubmit({
      name,
      link
    });
  }

  return (
    <PopupWithForm
      title="Nuevo lugar"
      name="place"
      buttonText="Crear"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="place-popup__input"
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
      <span className="place-popup__input-error name-place-input-error"></span>
      <input
        className="place-popup__input"
        placeholder="Enlace a la imagen"
        type="url"
        id="link-place"
        required
        name="link"
        value={link}
        onChange={handleLinkChange}
      />
      <span className="place-popup__input-error link-place-input-error"></span>
    </PopupWithForm>
  )
}
