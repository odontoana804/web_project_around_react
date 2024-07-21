import Card from "./Card";
import { useContext, useEffect, useState } from "react";
import { apiInstance } from "../utils/api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onRemoveCardClick,
}) {
  
  const [cards, setCards] = useState([]);

  const currentUser = useContext(CurrentUserContext);

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


  const editAvatarHover = () =>
    document
      .querySelector(".profile__avatar-edit")
      .classList.toggle("profile__avatar-edit_shown");

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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={currentUser.avatar}
            alt="avatar"
            className="profile__avatar-image"
            onMouseOver={editAvatarHover}
          />
          <button
            className="profile__avatar-edit"
            id="avatarEditButton"
            onClick={onEditAvatarClick}
            onMouseOut={editAvatarHover}
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-container">
            <h1 className="profile__name">{currentUser.name}</h1>
            <button
              className="profile__edit-button"
              onClick={()=>onEditProfileClick()}
            />
          </div>
          <p className="profile__description">{currentUser.about}</p>
        </div>
        <button className="profile__add-button" onClick={onAddPlaceClick} />
      </section>

      <section className="elements">
        {cards.map((card) => {
          return (
            <Card
              key={card._id}
              card={card}
              onRemoveCardClick={onRemoveCardClick}
              onCardClick={onCardClick}
              onCardLike={handleCardLike}
              onCardDelete={handleCardDelete}
            />
          );
        })}
      </section>
    </main>
  );
}
