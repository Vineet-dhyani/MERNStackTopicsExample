import { MongoClient } from "mongodb";
// we are creating a connection using mongoClient
//between nodejs and mongodb
const url="mongodb+srv://vineetdhyani:123%40Manurana@cluster0.ip9geit.mongodb.net/?retryWrites=true&w=majority"
const client=new MongoClient(url);

// client
// .connect()
// .then((result)=>{
// //we have made the connetion and we are selecting the database
// return result.db("MyTourDb");
// })
// .then((dbs)=>{
// //we have selected our database and here we are selecting collection
// let collection=dbs.collection("users");
// //and after that we are find all the document
// return collection.find({name:"vinay baunthiyal"}).toArray();
// })
// .then((response)=>{
//     console.log(response);
// })


//using fuction
const dbConnect=async()=>{
   const result=await client.connect();//connc created
   const dbs=await result.db("MyTourDb");//datavbase selected
   return dbs.collection('users');//colletion selected
   
}
export default dbConnect;