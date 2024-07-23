import { useRef, useState } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatar = useRef();
  const [errorMessage, setErrorMEssage] = useState("");
  const [loading, setLoading] = useState(false);
  const [validForm, setValidForm] = useState({
    avatar: false,
  });

  const isValidForm = () => {
    return validForm.avatar;
  };

  const handleAvatarChange = (evt) => {
    avatar.current.value = evt.target.value;
    setErrorMEssage(avatar.current.validationMessage);
    setValidForm({
      avatar: evt.target.validity.valid,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true);
    onUpdateAvatar({
      avatar: avatar.current.value,
    });
  };

  return (
    <PopupWithForm
      title="Cambiar foto de perfil"
      name="avatar"
      buttonText={loading ? "Guardando..." : "Guardar"}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
      isValid={isValidForm}
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
      <span className="avatar-popup__input-error_active">{errorMessage}</span>
    </PopupWithForm>
  );
}
