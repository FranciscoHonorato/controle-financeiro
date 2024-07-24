import React from "react";
import './Modal.css'


function Modal({ open, children, onClose }) {
  if (!open) return null

  return (
    <>
      <div className='bgModal' >
        <div className='modal'>
          <button className='btn' onClick={onClose}> X </button>
          <p>obs: entrada sinal +  | saida sinal - </p> 
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;