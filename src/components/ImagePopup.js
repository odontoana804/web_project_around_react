export default function ImagePopup() {
    return (
      <div className="img-popup">
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
      </div>
    );
  }