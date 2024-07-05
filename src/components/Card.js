import React from "react";

export default function Card({ card, onRemoveCardClick, onCardClick }) {
  function handleClick() {
    onCardClick(card);
  }

  return (
    <div className="elements__card">
      <div className="elements__card-photo">
        <img
          src={card.link}
          alt={card.name}
          className="elements__card-photo-imagen"
          onClick={handleClick}
        />
        <button
          className="elements__card-btn-trash"
          onClick={onRemoveCardClick}
        />
      </div>
      <div className="elements__card-info">
        <p className="elements__card-title">{card.name}</p>
        <div className="elements__card-like-container">
          <button className="elements__card-btn-hearth" />
          <p className="elements__card-likes-counter">{card.likes.length}</p>
        </div>
      </div>
    </div>
  );
}
