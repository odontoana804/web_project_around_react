import PopupWithForm from "./PopupWithForm";

export default function ConfirmationPopup({ isOpen, onClose, onCardDelete, card }) {

  const handleSubmit = (evt) => {
    evt.preventDefault();

    onCardDelete(card._id);
  }

  return (
    <PopupWithForm
      title="¿Estás seguro?"
      name="confirmation"
      buttonText="Si"
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    />
  )
}
