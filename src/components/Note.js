import React from 'react'

const Note = ({id,text,date,handleDeleteNote}) => {
  return (
    <div className='note'>

        <span>{text}</span>
        <div className='note-footer'>
            <small>{date}</small>
            <i class="fa-sharp fa-solid fa-trash delete" onClick={()=>handleDeleteNote(id)}></i> 
                         </div>
    </div>
  )
}

export default Note