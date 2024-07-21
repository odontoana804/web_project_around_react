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

  const currentUser = useContext(CurrentUserContext);

  const [cards, setCards] = useState([]);



  const editAvatarHover = () =>
    document
      .querySelector(".profile__avatar-edit")
      .classList.toggle("profile__avatar-edit_shown");

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
              onClick={onEditProfileClick}
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
            />
          );
        })}
      </section>
    </main>
  );
}
