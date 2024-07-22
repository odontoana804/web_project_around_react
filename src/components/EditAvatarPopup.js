import { useRef } from 'react';
import PopupWithForm from './PopupWithForm';

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const avatar = useRef();

  const handleAvatarChange = (evt) => {
    avatar.current.value = evt.target.value;
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
  
    onUpdateAvatar({
      avatar: avatar.current.value
    });
  }

  return (
    <PopupWithForm
      title="Cambiar foto de perfil"
      name="avatar"
      buttonText="Guardar"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="avatar-popup__input"
        placeholder="Enlace a la imagen"
        type="url"
        id="url-avatar"
        required
        name="avatar"
        ref={avatar}
        onChange={handleAvatarChange}
      />
      <span className="avatar-popup__input-error url-avatar-input-error"></span>
    </PopupWithForm>
  )
}
