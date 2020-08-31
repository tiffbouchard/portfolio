import React from "react"
import "./modal.css"

const Modal = ({ handleClose, showAbout, showWork, showContact, children }) => {
  const showHideClassName =
    showAbout || showWork || showContact
      ? "modal display-block"
      : "modal display-none"

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        {children}
      </section>
    </div>
  )
}

export default Modal
