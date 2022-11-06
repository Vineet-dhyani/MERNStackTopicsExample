import express from 'express';
import products from './Scripts/Data.js';
import mongoose from 'mongoose';
import User from './Scripts/userSchema.js'

const app=express();

const run=async()=>{
    const user=await User.find();
      return user;
}

app.get('/',(req,res)=>{
    res.send("HomepAge")
})
app.get("/users",async(req,res)=>{
      const user=await  run();
       res.status(200).json(user);
})

const url="mongodb+srv://vineetdhyani:123%40Manurana@cluster0.ip9geit.mongodb.net/MyTourDb?retryWrites=true&w=majority"
mongoose.connect(url).then(()=>{
    app.listen(3000,()=>console.log(`server running on port 3000`))
}).catch((error)=>console.log(`${error} did not connect`));