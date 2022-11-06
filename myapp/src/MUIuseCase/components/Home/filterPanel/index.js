import React from 'react'
import FilterListToggle from '../../common/FilterListToggle'
import { categoryList } from '../../../constants'
import './style.css'

const index = ({selectedCategory,selectToggle}) => {
  return (
    <div>
     <div className="input-group">
      <p className='label'>Category</p>
      <FilterListToggle 
      options={categoryList}
       value={selectedCategory} 
       selectToggle={selectToggle}/>
      </div> 
     </div>
  )
}

export default index
