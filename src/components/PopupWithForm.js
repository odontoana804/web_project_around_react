

export default function PopupWithForm({
    children, 
    title, 
    name, 
    buttonText, 
    isOpen, 
    onClose,
    onSubmit
  }) {

  return (
    <>
      <div 
        className={isOpen ? "overlay overlay_opened" : "overlay"}
        onClick={onClose}
      />
      <div 
        className= {isOpen ? `${name}-popup  ${name}-popup_opened` : `${name}-popup` } 
        id={`popup__${name}`}
      >
        <p className={`${name}-popup__title`}>{title}</p>
        <form 
          className={`${name}-popup__container`} 
          onSubmit={onSubmit}
          //noValidate
        >
          {children}
          <button
            className={`${name}-popup__btn-close`}
            id={`btn-close-${name}`}
            type="reset"
            onClick={onClose}
          ></button>
          <button
            className={`${name}-popup__btn-submit`}
            id={`btn-submit-${name}`}
            type="submit"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </>
  )
}
