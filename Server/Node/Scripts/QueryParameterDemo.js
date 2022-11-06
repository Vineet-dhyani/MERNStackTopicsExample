import express from 'express';
import products from './Scripts/Data.js'

const app=express();

app.get("/",(req,res)=>{
    res.send("Home Page");
})

         //////Query Parameter////
////here we demonstarting user searching for product by name///
///searching prdouct by id////
///searching product by comapany///
///by using req.query////

app.get("/api/v1/Product",(req,res)=>{
    console.log(req.query);
  
    let foundSimilarProducts="";
    if(req.query.name==="name"){
        foundSimilarProducts=products.filter((product)=>product.fields.name.startsWith(req.query.tag))
    }
     
    
    if(req.query.name==="company"){
        
        foundSimilarProducts=products.find((product)=>product.fields.company===req.query.tag)
    }
    if(req.query.name==="id"){
        foundSimilarProducts=products.find((product)=>product.id.endsWith(req.query.tag))
    }
   res.json(foundSimilarProducts)
})


app.listen(3000,()=>{
    console.log("Listening on port 3000");
})