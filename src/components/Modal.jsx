import React from "react";

const modal = {
  position:'fixed',
  top:'25%',
  left:'50%',
  transform:'translate(-50%, -50%',
  backgroundColor:'#FFF',
  padding:'50px',
  zIndex:1000

}
const bgModal = {
  position:'fixed',
  top:0,
  left:0,
  right:0,
  bottom:0,
  backgroundColor:'rgba(0,0,0,.7)',
  zIndex:1000

}

const btn={
  color:'red',
  backgroundColor:"white",
  position:'relative',
  left:'10rem'

}



function Modal({ open, children, onClose }) {
  if (!open) return null

  return (
    <>
      <div style={bgModal} >
        <div style={modal}>
          <button style={btn} onClick={onClose}> X </button>
          <p>obs: entrada sinal +  | saida sinal - </p> 
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;