import mongoose from "mongoose";
import User from "./Scripts/userSchema.js";
import Profile from "./Scripts/userProfileSchema.js";

const url="mongodb+srv://vineetdhyani:123%40Manurana@cluster0.ip9geit.mongodb.net/MyTourDb?retryWrites=true&w=majority"
mongoose.connect(url,()=>{
    console.log("connected to db");
},
(e)=>{
    console.log(e.message);
})

const insertUser=async(user)=>{
    return await User.create(user);
    
}
const updateuser=async(user)=>{
    return await User.findOne(user);
}
const run=async()=>{

    //inserting the user using insertuser func
//   const user=await insertUser({
//     name:"damyanti",
//     age:52,
//     email:"damyanti@gmail.com",
//     createdAt:Date.now(),
//     updatedAt:Date.now(),
//     hobbies:["bike riding","cooking"],
//     course:{
//         course_name:"web dev",
//         duration:20
//     }
// })
        

        //insering again after setting default value and required field
         //custom validator and min & max ,min length
 //const user=await insertUser({name:"akash",age:26,email:"akash@gmail.com"})
     
      //finding user by staic function and using instance method
//  const user=await User.findByName("akash");
//  console.log(user);
//  user.greet();


       //updating the user using updateUser
// const finduser=await updateuser({name:"damyanti"});
// console.log(finduser);
// finduser.name="damyanti dhyani"
// finduser.save();
// console.log(finduser);


//               //querying with chaining///
//  1>   const user=await User.where("name")
//     .equals ("damyanti")
//     .where("age")
//     .gt(50)
//     .count();
//      console.log(user);
   
//   2>  const user=await User.where({name: new RegExp("damyanti","i")})
//       .where("age")
//       .gt(50);
//       console.log(user);

// 3>  /// using qurey method which we have created///
        ///we have to apply first dummy find() method

    //    const user=await User.find().byName("damyanti").
    //    where("age").gt(50);
    //    console.log(user);

// 4>       ///using vitual property//

    //  const user=await User.find();
    //  console.log(user[0].nameAge);

              
       //middleware///

// const user=await User.findOne().byName("damyanti");
// user.name="damyanti dhyani";
// user.age=56;
// user.save();



        //creating one to one relationship//
         
        //first creating user using userschema/
//   const user=await User.create({
//     name:"damyanti",
//     age:52,
//     email:"damyanti@gmail.com",
//    createdAt:Date.now(),
//    updatedAt:Date.now(),
//     hobbies:["bike riding","cooking"],
//     course:{
//            course_name:"web dev",
//            duration:20
//            }
//       })
//     console.log(user);
    
         //finding user and creating profile using profileschema and
         //provinding user objectid to profile schema
// const UserForProfile=await User.findOne({name:"damyanti"})
// const profile=await Profile.create({
// username:"Damyanti.dhyani",
// password:"abc123",
// userId:UserForProfile._id,
// })
// console.log(profile);

        //here we are checking that both user and profile are synced now//
        //here we populating userId in Profile schema and vice-versa
        
// const profile= await Profile.findOne({username:"Damyanti.dhyani"})
// const UserForProfile=await User.findOne({name:"damyanti"})
// UserForProfile.profileID=profile._id;
// UserForProfile.save();
// console.log(await UserForProfile.populate("profileID"));


}
run();

