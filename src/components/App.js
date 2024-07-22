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
import AddPlacePopup from "./AddPlacePopup";



function App() {

  useEffect(()=> {
    document.addEventListener("keydown", (e) => {
      e.key === "Escape" && closeAllPopups()
    })
  })
  
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    apiInstance
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

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

  const handleCardLike = (card, evt) => {
    if (evt.target.classList.contains("elements__card-btn-hearth_active")) {
      apiInstance.removeLike(card._id)
      .then(() => {
        evt.target.classList.toggle("elements__card-btn-hearth_active");
        evt.target.nextElementSibling.textContent = Number(evt.target.nextElementSibling.textContent) - 1;
      })
      .catch((err) => {
        console.log(err);
      })
    } else {
      apiInstance.addLike(card._id)
      .then(() => {
        evt.target.classList.toggle("elements__card-btn-hearth_active");
        evt.target.nextElementSibling.textContent = Number(evt.target.nextElementSibling.textContent) + 1;
      })
      .catch((err) => {
        console.log(err);
      })   
    }
  }

  const handleCardDelete = (id) => {
    apiInstance.deleteCard(id)
    .then(() => {
      setCards(cards.filter((card) => card._id !== id))
    })
    .catch((err) => {
      console.log(err);
    });
  }

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

  const handleAddPlaceSubmit = ({name, link}) => {
    apiInstance.addNewCard({name, link})
    .then((newCard) => {
      setCards([newCard, ...cards])
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
          <AddPlacePopup
            isOpen={isAddPlacePopupOpen} 
            onClose={closeAllPopups}
            onAddPlaceSubmit={handleAddPlaceSubmit} 
          />
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
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />
      </div>
    </CurrentUserContext.Provider>
  );

}

export default App;
