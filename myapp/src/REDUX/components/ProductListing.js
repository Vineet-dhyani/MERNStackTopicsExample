import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import ProductComponet from './ProductComponet';
import axios from'axios'
import { useDispatch } from 'react-redux';
import { setProducts } from '../actions/productAction';


const ProductListing = () => {
    const products = useSelector((state) => state.allProducts.products);
   const dispatch=useDispatch();

   const fetchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err: ", err);
      });
    dispatch(setProducts(response.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      <ProductComponet/>
    </div>
  )
}

export default ProductListing
