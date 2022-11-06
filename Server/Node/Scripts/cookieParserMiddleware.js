import express from  'express'
import cookieParser from 'cookie-parser';

const app=express();

//applying middleware cookie parser///
app.use(cookieParser());

app.get('/',(req,res)=>{
  res.send("Hello cookies")
})

//setting cookies on client side using express 
// app.get('/set-cookie',(req,res)=>{
//   res.setHeader('set-cookie','name=Jim')
//   res.send("cookies is now set");
// })


//setting cookies on client side using cookieparser
// app.get('/set-cookie',(req,res)=>{
//   res.cookie('last-name','saini');
//   res.send("cookies is now set");
// })

//setting cookies on client side using cookieparser using multiple option
app.get('/set-cookie/option',(req,res)=>{
  res.cookie('last-name','saini',{
   
    maxAge:30000,//after 30 sec it will be gone
    httpOnly:true ,//if u want to read the cookie on server side
    //secure:true,//means only work on https
   // domain:....//you can provide your domain name
  });
  res.send("cookies is now set");
})

//getting cookie on server side
app.get('/get-cookie',(req,res)=>{
  console.log(req.cookies);
  res.send("cookies sent to server")
  
})

//deleting cookie
app.get('/delete-cookie',(req,res)=>{
  res.clearCookie('last-name')
  res.send("cookies are now deleted")
  
})



app.listen(3000,()=>{

  console.log("server started");
});
