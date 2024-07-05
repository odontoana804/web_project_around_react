import { useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false)
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false)
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false)


  
  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  };
  
  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  };
  
  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  };

  const handleViewImageClick = () => {
    setIsImagePopupOpen(true)
  };

  const handleremoveCardClick = () => {
    setIsConfirmationPopupOpen(true)
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false)
    setIsAddPlacePopupOpen(false)
    setIsEditAvatarPopupOpen(false)
    setIsImagePopupOpen(false)
    setIsConfirmationPopupOpen(false)
  };

  return (
    <>
      <div className="page">

        <Header />

        {isEditProfilePopupOpen &&
        
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
        }

        {isAddPlacePopupOpen &&
     
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
        }

        {isEditAvatarPopupOpen &&
          
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
        }

        {isConfirmationPopupOpen &&          
          <PopupWithForm
          title="¿Estás seguro?"
          name="confirmation"
          buttonText="Si"
          isOpen={isConfirmationPopupOpen}
          onClose={closeAllPopups}
        />}

        {isImagePopupOpen && 
          <ImagePopup 
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}          
          />
        }
        
        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick={handleViewImageClick}
          onRemoveCardClick={handleremoveCardClick}
        />

        <Footer />
      </div>

      {/* <template id="card-template">
        <div className="elements__card">
          <div className="elements__card-photo">
            <img src=" " alt=" " className="elements__card-photo-imagen" />
            <button className="elements__card-btn-trash"></button>
          </div>
          <div className="elements__card-info">
            <p className="elements__card-title"></p>
            <div className="elements__card-like-container">
              <button className="elements__card-btn-hearth"></button>
              <p className="elements__card-likes-counter">0</p>
            </div>
          </div>
        </div>
      </template> */}

      {/*  <template id="popupProfileTemplate">
        <form className="popup__container" id="popup__profile" noValidate>
          <p className="popup__title">Editar Perfil</p>
          <input
            className="popup__input"
            placeholder="Nombre"
            type="text"
            id="name-profile"
            minLength="2"
            maxLength="40"
            required
            name="name"
          />
          <span className="popup__input-error name-profile-input-error"></span>
          <input
            className="popup__input"
            placeholder="Acerca de mí"
            type="text"
            id="about-profile"
            minLength="2"
            maxLength="200"
            required
            name="about"
          />
          <span className="popup__input-error about-profile-input-error"></span>
          <button
            className="popup__btn-close"
            id="btn-close-profile"
            type="reset"
          ></button>
          <button
            className="popup__btn-submit"
            id="btn-submit-profile"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </template> */}

      {/*  <template id="popupPlaceTemplate">
        <form className="popup__container" id="popup__place" noValidate>
          <p className="popup__title">Nuevo lugar</p>
          <input
            className="popup__input"
            placeholder="Título"
            type="text"
            id="name-place"
            minLength="2"
            maxLength="30"
            required
            name="name"
          />
          <span className="popup__input-error name-place-input-error"></span>
          <input
            className="popup__input"
            placeholder="Enlace a la imagen"
            type="url"
            id="link-place"
            required
            name="link"
          />
          <span className="popup__input-error link-place-input-error"></span>
          <button
            className="popup__btn-close"
            id="btn-close-place"
            type="reset"
          ></button>
          <button
            className="popup__btn-submit"
            id="btn-submit-place"
            type="submit"
          >
            Crear
          </button>
        </form>
      </template> */}

      {/*   <template id="popupConfirmationTemplate">
        <form
          className="confirmation-popup__container"
          id="popup__confirmation"
        >
          <p className="confirmation-popup__title">¿Estás seguro?</p>
          <button
            className="confirmation-popup__btn-close"
            id="btn-close-confirmation"
            type="reset"
          ></button>
          <button
            className="confirmation-popup__btn-submit"
            id="btn-submit-confirmation"
            type="submit"
          >
            Si
          </button>
        </form>
      </template> */}

      {/* <template id="popupAvatarTemplate">
        <form className="avatar-popup__container" id="popup__avatar" noValidate>
          <p className="avatar-popup__title">Cambiar foto de perfil</p>
          <input
            className="avatar-popup__input"
            placeholder="Enlace a la imagen"
            type="url"
            id="url-avatar"
            required
            name="avatar"
          />
          <span className="avatar-popup__input-error url-avatar-input-error"></span>
          <button
            className="avatar-popup__btn-close"
            id="btn-close-avatar"
            type="reset"
          ></button>
          <button
            className="avatar-popup__btn-submit"
            id="btn-submit-avatar"
            type="submit"
          >
            Guardar
          </button>
        </form>
      </template> */}

      {/* <template id="popupImageTemplate">
        <div id="popup__image">
          <button
            className="img-popup__btn-close"
            id="btn-close-image"
            type="reset"
          ></button>
          <div className="img-popup__container">
            <img src=" " alt=" " className="img-popup__preview" />
            <p className="img-popup__title"></p>
          </div>
        </div>
      </template> */}
    </>
  );
}

export default App;
