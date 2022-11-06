import express from  'express'
import session from 'express-session';

const app=express();

//using session middleware
app.use(session({
  secret: 'keyboard cat', //secret key for encryotion
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false,maxAge:60000 }
}));

app.get('/test',(req,res)=>{
  req.session.number?req.session.number++:(
    req.session.number=1);        ///storing session id if not then creating
  res.send(`${req.session.number}`);
})

app.listen(3000,()=>{

  console.log("server started");
});
