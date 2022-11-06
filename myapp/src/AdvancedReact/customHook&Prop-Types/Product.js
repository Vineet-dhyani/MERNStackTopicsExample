import React from 'react'

const Product = ({name,image,price}) => {
  const url=image?image.url:image.DefaultImage;
  return (
    <div>
      <img src={url} alt={name}/>
      <h3>{name}</h3>
      <p>{price}</p>
    </div>
  )
}

export default Product
