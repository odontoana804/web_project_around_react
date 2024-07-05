import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const handleEditProfileClick = () => setIsEditProfilePopupOpen(true);

  const handleAddPlaceClick = () => setIsAddPlacePopupOpen(true);

  const handleEditAvatarClick = () => setIsEditAvatarPopupOpen(true);

  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card);
  };

  const handleremoveCardClick = () => setIsConfirmationPopupOpen(true);

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    setIsConfirmationPopupOpen(false);
  };

  return (
    <div className="page">
      <Header />

      {isEditProfilePopupOpen && (
        <PopupWithForm
          title="Editar Perfil"
          name="profile"
          buttonText="Guardar"
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
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
          />
          <span className="profile-popup__input-error about-profile-input-error"></span>
        </PopupWithForm>
      )}

      {isAddPlacePopupOpen && (
        <PopupWithForm
          title="Nuevo lugar"
          name="place"
          buttonText="Crear"
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
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
          />
          <span className="place-popup__input-error name-place-input-error"></span>
          <input
            className="place-popup__input"
            placeholder="Enlace a la imagen"
            type="url"
            id="link-place"
            required
            name="link"
          />
          <span className="place-popup__input-error link-place-input-error"></span>
        </PopupWithForm>
      )}

      {isEditAvatarPopupOpen && (
        <PopupWithForm
          title="Cambiar foto de perfil"
          name="avatar"
          buttonText="Guardar"
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
        >
          <input
            className="avatar-popup__input"
            placeholder="Enlace a la imagen"
            type="url"
            id="url-avatar"
            required
            name="avatar"
          />
          <span className="avatar-popup__input-error url-avatar-input-error"></span>
        </PopupWithForm>
      )}

      {isConfirmationPopupOpen && (
        <PopupWithForm
          title="¿Estás seguro?"
          name="confirmation"
          buttonText="Si"
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopups}
        />
      )}

      {isImagePopupOpen && (
        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
        />
      )}

      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onRemoveCardClick={handleremoveCardClick}
      />

      <Footer />
    </div>
  );
}

export default App;
