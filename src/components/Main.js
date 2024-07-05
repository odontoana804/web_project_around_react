import Card from "./Card";
import { useEffect, useState } from "react";
import { apiInstance } from "../utils/api";

export default function Main({
  onEditProfileClick,
  onAddPlaceClick,
  onEditAvatarClick,
  onCardClick,
  onRemoveCardClick,
}) {
  const [userName, setUserName] = useState();
  const [userDescription, setUserDescription] = useState();
  const [userAvatar, setUserAvatar] = useState();
  const [cards, setCards] = useState([]);

  useEffect(() => {
    apiInstance
      .getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar);
      })
      .catch((err) => {
        console.log(err);
      });

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

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-container">
          <img
            src={userAvatar}
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
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__edit-button"
              onClick={onEditProfileClick}
            />
          </div>
          <p className="profile__description">{userDescription}</p>
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
