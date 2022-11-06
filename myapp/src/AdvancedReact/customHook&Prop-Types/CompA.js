import React, { useContext } from 'react'
import UseFetch from './UseFetch'
import CompB from './CompB'
import Product from './Product'
import PropTypes from "prop-types";
import DefaultImage from "./furnitureImage.jpg"

const CompA = () => {
    const [data]=UseFetch("https://course-api.com/react-prop-types-example");
      
  return (
    <>
    <h1>List Of Furniture</h1>
    <ul>
   {  data.map((item)=>{
    return <Product key={item.id} {...item}/>
   })}
   </ul>

    <CompB/>
    </>
  )
}
Product.propTypes={
  id:PropTypes.string.isRequired,
  name:PropTypes.string.isRequired,
  image:PropTypes.object.isRequired,
  price:PropTypes.number.isRequired,
  
}
Product.defaultProps={
  id:new Date().getTime().toString(),
  name:"Furniture",
  image:{url:DefaultImage},
  price:3.99
}
export default CompA
