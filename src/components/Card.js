import React from "react";

export default function Card() {
  return (
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
  );
}
