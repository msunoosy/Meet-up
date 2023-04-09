import React from 'react'

function Modal(props) {
    
function cancelHandler(){
    props.onCancel()
}

function confirmlHandler(){
    
}


  return (
    <div className='modal'>
        <p>Are you sure?</p>
        <button className='btn btn--alt' onClick={cancelHandler}>Cancel</button>
        <button className='btn'>Confirm</button>  
    </div>
  )
} 

export default Modal