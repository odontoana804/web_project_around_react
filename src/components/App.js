import { useEffect, useState } from "react";
import Footer from "./Footer";
import Header from "./Header";
import ImagePopup from "./ImagePopup";
import Main from "./Main";
import PopupWithForm from "./PopupWithForm";
import { apiInstance } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";



function App() {
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    apiInstance
      .getUserInfo()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const handleUpdateUser = ({name, about}) => {
    
    apiInstance.setUserInfo({name, about})
    .then(()=> {
      setCurrentUser({
        ...currentUser, 
        name,
        about
      })
    })
    .then(()=> {
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  };

  const handleUpdateAvatar = ({avatar}) => {

    apiInstance.setUserAvatar({avatar})
    .then(() => {
      setCurrentUser({
        ...currentUser, 
        avatar
      })
    })
    .then(()=> {
      closeAllPopups();
    })
    .catch((err) => {
      console.log(err);
    });
  } 


  return (

    <CurrentUserContext.Provider value={currentUser}>

      <div className="page">
        <Header />

        {isEditProfilePopupOpen && (
          <EditProfilePopup 
            isOpen={isEditProfilePopupOpen} 
            onClose={closeAllPopups} 
            onUpdateUser={handleUpdateUser}
          />
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
           <EditAvatarPopup 
           isOpen={isEditAvatarPopupOpen} 
           onClose={closeAllPopups} 
           onUpdateAvatar={handleUpdateAvatar}
         />
          
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
    </CurrentUserContext.Provider>
  );

}

export default App;
