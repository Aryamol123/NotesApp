import React from 'react'

const Search = ({handleSearchNote}) => {
  return (
    <div className='search'>
        <i class="fa-solid fa-magnifying-glass search-icon"></i>
        <input type="text"  placeholder='Search' onChange={(e)=>handleSearchNote(e.target.value)}/>

    </div>
  )
}

export default Search