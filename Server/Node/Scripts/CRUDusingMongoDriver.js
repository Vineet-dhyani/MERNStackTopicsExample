import dbConnect from "./dbConfigUsingMongoDbDriver.js";

const getData=async()=>{

    const collection=await dbConnect();

    const data=await collection.find().toArray();
    console.log(data);
}
const PutData=async()=>{

    const collection=await dbConnect();
    //insering a new document
    const data=await collection.insertOne({name:"shanta prasad dhyani",email:"shantaprasaddhyani@gmail.com",password:"123456"});
    console.log(data);
    if(data.acknowledged){
        console.log("Data inserted Sucessfully");
    }
}
const updateData=async()=>{

    const collection=await dbConnect();
            //updating the document where name is bipul baunthiyal
  //  const data=await collection.updateOne({name:"bipul baunthiyal"},{$set:{name:"bipul don",language:"english"}})
             //updating the document where we are checking name
             //if not present upserting it means adding
 const data=await collection.updateOne({name:"sahil khan"},{$set:{name:"uncle john",language:"english"}},{upsert:true});
        console.log(data);
    
}
const deleteData=async()=>{

    const collection=await dbConnect();

    const data=await collection.deleteOne({name:"shanta prasad dhyani"});
    console.log(data);
}
getData();
// PutData();
// updateData();
deleteData();
