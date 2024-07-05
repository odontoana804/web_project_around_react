import Card from "./Card";


export default function Main({onEditProfileClick, onAddPlaceClick, onEditAvatarClick, onCardClick }) {


 



    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              src="<%= require('./images/avatar.jpg')%>"
              alt="avatar"
              className="profile__avatar-image"
            />
            <button
              className="profile__avatar-edit profile__avatar-edit_shown"
              id="avatarEditButton"
              onClick={onEditAvatarClick}
            ></button>
          </div>
          <div className="profile__info">
            <div className="profile__info-container">
              <h1 className="profile__name">Jacques Cousteau</h1>
              <button className="profile__edit-button" onClick={onEditProfileClick}></button>
            </div>
            <p className="profile__description">Explorador</p>
          </div>
          <button className="profile__add-button" onClick={onAddPlaceClick}></button>
        </section>
  
        <section className="elements"><Card /></section>
      </main>
    );
  }
