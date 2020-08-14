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
        {children}
        <button onClick={handleClose}>X</button>
      </section>
    </div>
  )
}

export default Modal
