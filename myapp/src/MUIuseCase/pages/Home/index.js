import React, { useEffect, useState } from 'react';
import SearchBar from "../../components/Home/searchBar/index";
import FilterPanel from "../../components/Home/filterPanel/index";
import List from "../../components/Home/List/index";
import './style.css'

const index = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleSelectCategory = (event, value) =>
  !value ? null : setSelectedCategory(value);

  return (
    <div className='home'>
    <SearchBar/>
    <div className="home_panelList-wrap">
    <div className="home-panel-wrap">
    <FilterPanel selectToggle={handleSelectCategory} selectedCategory={selectedCategory}/>
    </div>
    <div className="home-list-wrap">
    <List/>
    </div>
     </div>
    </div>
  )
}

export default index
