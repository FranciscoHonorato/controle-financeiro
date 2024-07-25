import React from "react";
import './Modal.css'


function Modal({ open, children, onClose }) {
  if (!open) return null

  return (
    <>
      <div className='bgModal' >
        <div className='modal'>
          <button className='btn_close' onClick={onClose}> X </button>
          {children}
          <p>obs: entrada sinal +  / saida sinal - </p> 
        </div>
      </div>
    </>
  );
}

export default Modal;