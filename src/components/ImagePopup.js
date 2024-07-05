export default function ImagePopup({isOpen, onClose}) {
    return (
      <>
        <div className={isOpen ? "overlay overlay_opened" : "overlay"}></div>
        <div className="img-popup img-popup_opened">
          <div id="popup__image">
            <button
              className="img-popup__btn-close"
              id="btn-close-image"
              type="reset"
              onClick={onClose}
            ></button>
            <div className="img-popup__container">
              <img src=" " alt=" " className="img-popup__preview" />
              <p className="img-popup__title"></p>
            </div>
          </div>
        </div>
      </>
    );
  }