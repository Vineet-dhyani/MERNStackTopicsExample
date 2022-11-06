import express from 'express'
import products from './Scripts/Data.js';


const app=express();

app.get("/",(req,res)=>{
    res.send("homePage")
})
app.get("/Products/Just/Image",(req,res)=>{
    const justImages=products.map((product)=>{
        const {image}=product.fields
        return {image}
    })
    res.json(justImages)
})
app.get("/Products",(req,res)=>{
    const newProducts=products.map((product)=>{
        const {name,price}=product.fields;
        return {name,price,id:product.id}
    })
    res.json(newProducts)
})
      ////passing a routing parameter///////
      //making the url more dynamic like seaching
      //for id so we dont  know how many id 
      //so here we used req.params

app.get("/Products/:productId",(req,res)=>{

    const singleProduct=products.find((product)=>product.id===req.params.productId)
    res.json(singleProduct)
})

///here we creating  routing parameter again//
//but ihis url is more dynamic we can get image like full,large,small
//for particular id and we can also chnage the id as well 
//and get the image url according to it like large,full,small
app.get("/Products/:productId/Image/:thumbnail",(req,res)=>{

    const singleProduct=products.find((product)=>product.id===req.params.productId)
     const imageurl={url:""}
    if(singleProduct){
    if(req.params.thumbnail==="full"){
        imageurl.url=singleProduct.fields.image[0].thumbnails.full.url
    }
    if(req.params.thumbnail==="small"){
        imageurl.url=singleProduct.fields.image[0].thumbnails.small.url
    }
    if(req.params.thumbnail==="large"){
        imageurl.url=singleProduct.fields.image[0].thumbnails.large.url
    }
   }
    res.json(imageurl)
})




app.listen(3000,()=>{
    console.log("Server started at port 3000");
})