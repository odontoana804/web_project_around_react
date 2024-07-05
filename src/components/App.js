import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";

function App() {
  const handleEditAvatarClick = () => {
    document
      .querySelector("#popup__avatar")
      .classList.add("avatar-popup_opened");
  };

  const handleEditProfileClick = () => {
    document.querySelector("#popup__profile").classList.add("popup_opened");
  };

  const handleAddPlaceClick = () => {
    document.querySelector("#popup__place").classList.add("popup_opened");
  };

  return (
    <>
      <div className="page">
        <Header />

        <div className="overlay"></div>

        <div className="popup" id="popup__profile">
          <form
            className="popup__container"
            /* id="popup__profile"  */ noValidate
          >
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
        </div>

        <div className="popup" id="popup__place">
          <form className="popup__container" /* id="popup__place" */ noValidate>
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
        </div>

        <div className="confirmation-popup" id="popup__confirmation">
          <form
            className="confirmation-popup__container" /* id="popup__confirmation" */
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
        </div>

        <div className="avatar-popup" id="popup__avatar">
          <form
            className="avatar-popup__container"
            /* id="popup__avatar" */ noValidate
          >
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
        </div>

        <ImagePopup />

        <Main
          onEditProfileClick={handleEditProfileClick}
          onAddPlaceClick={handleAddPlaceClick}
          onEditAvatarClick={handleEditAvatarClick}
          onCardClick
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
