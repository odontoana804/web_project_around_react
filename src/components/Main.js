import Card from "./Card";
import avatar from "../images/avatar.jpg"


export default function Main({
        onEditProfileClick, 
        onAddPlaceClick, 
        onEditAvatarClick, 
        onCardClick, 
        onRemoveCardClick, 
    }) {

    const editAvatarHoverMouseEnter = () => {
        document.querySelector(".profile__avatar-edit").classList.add("profile__avatar-edit_shown")
    }

    const editAvatarHoverMouseLeave = () => {
        document.querySelector(".profile__avatar-edit").classList.remove("profile__avatar-edit_shown")
    }
 

    return (
      <main className="content">
        <section className="profile">
          <div className="profile__avatar-container">
            <img
              src={avatar}
              alt="avatar"
              className="profile__avatar-image"
              onMouseOver={editAvatarHoverMouseEnter}
              
            />
            <button
              className="profile__avatar-edit"
              id="avatarEditButton"
              onClick={onEditAvatarClick}
              onMouseOut={editAvatarHoverMouseLeave}
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
  
        <section className="elements">
            <Card 
                onRemoveCardClick={onRemoveCardClick}
                onCardClick={onCardClick}
            />
        </section>
      </main>
    );
  }
