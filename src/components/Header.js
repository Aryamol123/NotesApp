import React from 'react'

const Header = ({toggle,setToggle}) => {
  return (
    <div className='header note-footer'>
        <h1>Notes</h1>
        <button className={toggle ?'toggle':' toggle dark-color'} onClick={()=>setToggle(!toggle)}>{toggle?<> <i class="fa-sharp fa-solid fa-sun"></i> <span>Light</span></>:<><span>Dark</span> <i class="fa-solid fa-moon"></i></>}</button>
    </div>
  )
}

export default Header