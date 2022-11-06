import React from 'react'
import SearchIcon from "@material-ui/icons/Search"
import "./style.css"

const SearchBar=({value,changeInput})=>(

   <div className='searchBar-Wrap'>
      <SearchIcon className="searchBar-icon"/>
      <input type="text" 
      placeholder='woodland hills' 
      value={value}
       onChange={changeInput}/>

    </div>
  )


export default SearchBar
