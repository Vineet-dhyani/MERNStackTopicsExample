import mongoose from "mongoose";

//we are creating schema
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true,  //proving field to be required
    },
    age:{
        type:Number,
        min:1,
        max:100,   //setting min and max
        validate:{
            validator:(v)=>v%2 == 0 , //custom validator here v is age
             message:props=>`${props.value}
             is not a even number`      //bcz we are applying on age
        }
    },
    email:{
       type: String,
       minlength:15, //setting min length 15
    },
   // createdAt:Date,
   createdAt:{
      type:Date,
      default:()=>Date.now(), //providing default value
      immutable:true, //if try to update this field cannot update
    },
    updatedAt:Date,
    hobbies:[String],
    course:{
        couse_name:String,
        duration:Number,
    },
    bestFriend:{
       type: mongoose.SchemaTypes.ObjectId,
    },
    
    profileID:{
        type:mongoose.SchemaTypes.ObjectId, //here one to one relationship
        ref:"Profile"                       //with Profie collections by provding
    }                                        //ref of that collection 
});                                          //one-to-one=>each user can have a unique profile
                                             //or each profile can have unique user
                                             //here we are using normalization form
                                             //for denormalization we have create entire profile
                                             //schema here only inside userSchema

      // creating Instance method
      //we cannot provide the arrow function
userSchema.methods.greet=function(){
    console.log(`hello ${this.name}`);//here we can use this 
                                      //bcz  it is a instance methods
}

     //creating Statics methods
userSchema.statics.findByName=function(nameToBeFound){
     return this.find({name:nameToBeFound}) //we are creating findByName func
                                           //which will return the user obj
}
          
        //creating query function
userSchema.query.byName=function(name){
    return this.where({name:new RegExp(name,"i")});
}

         //virual property//
    //which doesn't exist we created for our use//
userSchema.virtual("nameAge").get(function(){
    return  {name:this.name,age:this.age};
})


             //middleware///
    //here we before saving we are updating time
userSchema.pre("save",function(next){
    this.updatedAt=Date.now();
    next();
});
       //here doc is passed bcz it has info about what we save
       //so we are using this bcz for invoking greet func
userSchema.post("save",function(doc,next){
    doc.greet();
    next();
})



//now we have to tell for which collection we want to use
//this schema
export default mongoose.model("user",userSchema);


