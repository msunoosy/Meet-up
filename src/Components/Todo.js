import React, { useState } from 'react'
import Modal from './Modal'
import Backdrop from './Backdrop'
function Todo(props) {
  const [modalIsOpen,SetModalIsOpen]=useState(false)

function deleteHandler(){
 SetModalIsOpen(true)
}

function closeHandler(){
  SetModalIsOpen(false)
}

  return (
    <div className="card">
    <h2>{props.text}</h2>
    <div className="actions" >
    <button className="btn" onClick={deleteHandler }>Delete</button>
   </div>
   {modalIsOpen &&<Modal onCancel={closeHandler}/>  }
   {modalIsOpen && <Backdrop onClick={closeHandler}></Backdrop>}
   
   {/* <Backdrop/> */}
   </div>
  )
}

export default Todo