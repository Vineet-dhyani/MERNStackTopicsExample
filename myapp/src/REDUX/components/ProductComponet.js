import React from 'react'
import { useSelector } from 'react-redux'
const ProductComponet = () => {
    const products=useSelector((state)=>state.allProducts.products)
    const renderList=products.map((product)=>{
    const {id,image,title,price,category}=product
        return (
            <div key={id}>
              <h1>{title}</h1>
              <h2>{price}</h2>
              <h3>{category}</h3>
              <img>{image}</img>
            </div>
          );
    });
  return <>{renderList}</>
}

export default ProductComponet
