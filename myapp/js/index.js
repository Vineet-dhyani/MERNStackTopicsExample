 //1>**************AJAX***********************
 //**********making function for accesing server using http request and passing url as param and a callback function



 // function intiateRequest(url,callback){
// const request=new XMLHttpRequest();
// request.open("GET",url ,true);

// request.onprogress=function(){
//     console.log("on progress");
// }
//  request.onload=function(){
//     if(this.status===200){
//     let obj=JSON.parse(this.responseText)  ;
//     //********calling callback function and passing data and error as undefined
//     callback(obj,undefined);
//     }else{
//     //*********calling callback function and passing data as undefined and error
//         callback(undefined,this.status)
//     }
//  }

// request.addEventListener("readystatechange",()=>{
//     if(request.status===200&&request.readyState===4){
//         let obj=JSON.parse(request.responseText);
//         articles=obj.articles;
//       let li=document.createElement('li');
//       let ul=document.querySelector("#ul");
//       let str="";
      
//       articles.forEach(function(element){
//         str += `<li>${element.title} </li>`;
//       })
//     ul.innerHTML=str;
//     }
//     else if(request.readyState===4){
//                 console.log(this.status+"error occured");
//  }
 
// });

// request.send();
// console.log('we are done');

// }
                //*********Making code resuable for  working with different url.........
                //********calling intiateRequest function and passing url and getting data and error from callback func               
                
// let url1="https://newsapi.org/v2/top-headlines?country=us&apiKey=fa7c512d66464f9691cf858d99fbecd4"
// intiateRequest(url1,(data,err)=>{
// let ul=document.querySelector("#ul");
// let str="";
// data=data.articles;
// data.forEach(function(element) {
//     str+=`<li>${element.title}</li>`
//     ul.innerHTML+=str;
// });
// console.log(err);
// });

// let url2="https://api.github.com/users";
// intiateRequest(url2,(data,err)=>{
//     let ul=document.querySelector("#ul");
// let str="";
// data.forEach(function(element) {
//     str+=`<li>${element.login}</li>`
//     ul.innerHTML+=str;
// });
// console.log(err);
// });

// 1.2>****************callback hell*****************
              //************callback hell.........
              //*********calling intaiateRequest func and passing url and getting data and err and after getting data again calling 
              //       intiateRequest with  url which will be treated as nested url and getting data and error and we can call the func

// let url1="https://newsapi.org/v2/top-headlines?country=us&apiKey=fa7c512d66464f9691cf858d99fbecd4"
// intiateRequest(url1,(data,err)=>{
//     if(data===undefined){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//         let str="";
//         let ul=document.querySelector("#ul"); 
//         data=data.articles;
//         data.forEach(function(element) {
//                 str+=`<li>${element.source.id}</li>`
//                 ul.innerHTML+=str;
//             }); 
//     intiateRequest("https://newsapi.org/v2/top-headlines?country=us&apiKey=fa7c512d66464f9691cf858d99fbecd4",(data,err)=>{
//        if(data===undefined){
//         console.log(err);
//        }
//        else{
//         data=data.articles;
//         data.forEach(function(element){
//             console.log(data.title);
//         })
//        }
//     })
//     }
// })



//2>********************************promises****************************

// const gettodos=(url)=>{
//     return new Promise((resolve,reject)=>{
//         const request=new XMLHttpRequest();
//         request.open("GET",url ,true);

//         request.addEventListener("readystatechange",()=>{
//                 if(request.status===200&&request.readyState===4){
//                     let result=JSON.parse(request.responseText);
//                     resolve(result);
//                 }else if(request.readyState===4){
//                     reject(request.status+"error occured")
//                 }
             
//             });
//         request.send();
//     })
// }
//***********whichever the data passed by resolve method it willbe handled by .then and
//***********whichever the data passeed by reject method it will be handled by reject method


//**************promise chaining=>  so first getodos func gave promise we call .then method in this method we are
//**************we are returning another promise and for this method we call .then method again and this method we
//***************we are again returning new promise */ */


// gettodos("https://api.github.com/users").then((data)=>{
//     console.log(data);
//   return  gettodos('https://api.github.com/users/5').then((data)={

//     })
// }).then((data)=>{
//     console.log("insisde another data");
//     console.log(data);
//     return gettodos("https://api.github.com/users/3")
// }).then((data)=>{
//     console.log("insisde another another data");
//     console.log(data);

// })
// .catch(err=>{
// console.log(err);
// })

//*******************simple ex of promise chainig   
                        // const x=() => {
                        //    return 5;
                         //       };
                        //  const y= () =>{
                        //     return x();
                        //  }
                        // console.log(y());



// //***************Another Promises  examples..........................

// const students=[
//     {name:'vineet',subject:"javascript"},
//     {name:"vinay",subject:"phython"}

// ]

// function enrolledStudents(student){
//     return new Promise(function(resolve,reject){
//         setTimeout(function(){
//             students.push(student);
//             console.log("student has been enrolled");
//             const error=false;
//             if(!error){
//                 resolve();
//             }else{
//                 reject();
//             }
//            }, 5000);
//     })
   
// }

// function getstudent(){
//     setTimeout(function(){
//         let str="";
//         students.forEach(function(student){
//             str+=`<li>${student.name}</li>`
            
//         });
//         let ul=document.querySelector('#ul');
//         ul.innerHTML=str;
//         console.log("student have been fetched");
//     }, 1000);
// }
// let newStudent={name:"bipul",subject:"oracle"};
// enrolledStudents(newStudent).then(getstudent).catch(function(){
//     console.log("error occured");
// });

// console.log("end of program");


//*****************************one more promise example************ */

// const isValid = email => {
//       const regex = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
//       console.log(regex.test(String(email).toLowerCase()) ? "VALID Email!" : new Error("INVALID Email!"));
//   }
//   const producercode=new Promise(function(resolve,reject){
//       console.log("Getting email from server...");
//      setTimeout(() => {
//       resolve("srishti.gupta@upgrad.com");
//      }, 2000);
//       });
//   producercode.then((val)=>{
//   console.log(`Email = ${val}`);
//   isValid(val);
  
//   }).
//   catch(()=>{
//       console.log(`Could not get email from server!`);
//   })
// 
// 
// 
//***************callbackhell vs promises vs Async Await*********************** */

           //////callback hell//////////////////


// const getUsername = (callback) => {
//     console.log("Getting username...");
//     // code to get the username
//     setTimeout(() => {
//         const username = "srishti";
//         console.log("Username = " + username);
//         callback(username);
//     }, 3000);
// }

// const validateUsername = (username, callback) => {
//     console.log("Validating username...");
     
//         if (username !== undefined && username !== null && username !== "") {
//             console.log("Valid Username!");
//             callback();
//         } else {
//             console.log("Invalid Username! Please try again!");
//         }
// }

// const getPassword = (callback) => {
//     console.log("Getting password...");
//     // code to get the password
//     setTimeout(() => {
//         const password = "upgrad";
//         console.log("Password = " + password);
//         callback(password);
//     }, 3000);
// }

// const validatePassword = (password, callback) => {
//     console.log("Validating password...");
//         // if the password is not undefined or null or empty string, call the done() function
//         if (password !== undefined || password !== null || password !== "") {
//             console.log("Valid Password!");
//             callback();
//         } else {
//             console.log("Invalid Password! Please try again!");
//         }
// }

// const done = () => {
//     console.log("BOTH VALID");
// }

// const login = () => {
//     getUsername((username) => {
//         validateUsername(username, () => {
//             getPassword((password) => {
//                 validatePassword(password, () => {
//                     done();
//                 });
//             });
//         });
//     });
// }

// login();

            /////above code solved by promises/////////////


//  const getUsername = new Promise((resolve, reject) => {
//     console.log("Getting username...");
//     // code to get the username
//     setTimeout(() => {
//         const username = "srishti";
//         console.log("Username = " + username);
//         resolve(username);
//     }, 3000);
// });


// const validateUsername = (username) => {
//     return new Promise((resolve, reject) => {
//         console.log("Validating username...");
//         // if the username is not undefined or null or empty string, call the getPassword() function
//         if (username !== undefined && username !== null && username !== "") {
//             console.log("Valid Username!");
//             resolve();
//         } else {
//             reject("Invalid Username! Please try again!");
//         }
//     });
// }

// const getPassword = () => {
//     return new Promise((resolve, reject) => {
//         console.log("Getting password...");
//         // code to get the password
//         setTimeout(() => {
//             const password = "upgrad";
//             console.log("Password = " + password);
//             resolve(password);
//         }, 3000);
//     });
// }

// const validatePassword = (password) => {
//     return new Promise((resolve, reject) => {
//         console.log("Validating password...");
//         // if the password is not undefined or null or empty string, call the done() function
//         if (password !== undefined || password !== null || password !== "") {
//             console.log("Valid Password!");
//             resolve();
//         } else {
//             reject("Invalid Password! Please try again!");
//         }
//     });
// }

// const done = () => {
//     console.log("BOTH VALID");
// };


// const login = () => {                                                   
//     getUsername.then((username) => {                          
//         return validateUsername(username);                          
//     }, (error) => {                          
//         console.log(new Error(error));                          
//     }).then(() => {                          
//         return getPassword();                          
//     }, (error) => {                          
//         console.log(new Error(error));                          
//     }).then((password) => {                          
//         return validatePassword(password);                          
//     }, (error) => {                          
//         console.log(new Error(error));                          
//     }).then(() => {                          
//         return done();                          
//     }, (error) => {                          
//         console.log(new Error(error));                          
//     });
// };
            ///////   or ///////////
 //    const login = () => {
 //     return getUsername()
 //     .then(username=>validateUsername(username))
 //     .then(getPassword)
 //     .then(password=>validatePassword(password))
 //     .then(done)
 //     .catch((err)=>{console.log(err);})
      
 //  }
// login();
            

           ////////above code by async await////////////


  //    const getUsername = new Promise((resolve, reject) => {
  //     console.log("Getting username...");
  //     // code to get the username
  //     setTimeout(() => {
  //         const username = "srishti";
  //         console.log("Username = " + username);
  //         resolve(username);
  //     }, 3000);
  // });
  
  // const validateUsername = (username) => {
  //     return new Promise((resolve, reject) => {
  //         console.log("Validating username...");
  //         // if the username is not undefined or null or empty string, call the getPassword() function
  //         if (username !== undefined && username !== null && username !== "") {
  //             console.log("Valid Username!");
  //             resolve();
  //         } else {
  //             reject("Invalid Username! Please try again!");
  //         }
  //     });
  // }
  
  // const getPassword = () => {
  //     return new Promise((resolve, reject) => {
  //         console.log("Getting password...");
  //         // code to get the password
  //         setTimeout(() => {
  //             const password = "upgrad";
  //             console.log("Password = " + password);
  //             resolve(password);
  //         }, 3000);
  //     });
  // }
  
  // const validatePassword = (password) => {
  //     return new Promise((resolve, reject) => {
  //         console.log("Validating password...");
  //         // if the password is not undefined or null or empty string, call the done() function
  //         if (password !== undefined || password !== null || password !== "") {
  //             console.log("Valid Password!");
  //             resolve();
  //         } else {
  //             reject("Invalid Password! Please try again!");
  //         }
  //     });
  // }
  
  // const done = () => {
  //     console.log("BOTH VALID");
  // };
  
  // const login = async () => {
  //     try {
  //         const username = await getUsername;
  //         await validateUsername(username);
  //         const password = await getPassword();
  //         await validatePassword(password);
  //         done();
  //     } catch(error) {
  //         console.log(new Error(error));
  //     }
  // };
  
  // login();


//3>*******************************fetchApi***********************
// 

//function getdata(){
//   fetch("https://api.github.com/users").
//      then((response)=>{
      //........fetch api is returning response object(have two parts :info about response and second  about json)
// if(response.status===200){
//     //......this json method is returning promise  having data which will be handled by .then func
//     return response.json();
// }
//   }).then((data)=>{
//     console.log(data);
//   }).catch((err)=>{
//     console.log(err);
// })
// }
// getdata();



// function postdata(){
//   fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'foo',
//     body: 'bar',
//     userId: 1,
//   }),
//   headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// })
//   .then((response) => response.json())
//   .then((json) => console.log(json));
// }
// postdata();

//................example for showing it on web page...............

// const getdata=(resource)=>{
//     return fetch(resource);
// }
// const form=document.querySelector('form');
// const ul=document.querySelector('.insert ul');

// form.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     getdata("https://api.github.com/users").
//          then((response)=>{
//      if(response.status===200){
//          return response.json();
//     }
//       }).then((data)=>{
//         let str="";
//         data.forEach(element => {
//             str+=`<li>${element.login}</li>`
//             ul.innerHTML+=str;
//         });
//       }).catch((err)=>{
//         console.log(err);
//     })
// })






//4>****************************async await.......................
   
    //   async & await keywords were introduced in ES8 (ES2017), 
    //     which are internally based on promises but makes the
    //      code even more readable as compared to promises.
    //......async(outside non-blocking and await inside blocking).......

      
      // await keyword makes the code wait until the promise is either
      //  resolved or rejected. It is a better way of writing code than
      //   using the then() method to handle the success of the promise. 
      //   Also, note that the await keyword, though waits for the promise 
      //   to get resolved or rejected, yet does not handle the rejection 
      //   of the promise. In other words, the await keyword will wait for 
      //   the promise to get either resolved or rejected. If the promise 
      //   is resolved, the await keyword will give the result of the promise 
      //   (if any argument is passed while resolving the promise). However,
      //    if an error occurs, you should handle it appropriately since the 
      //    await keyword will not hold the error(s). For this, you can use 
      //    the catch block, which is something that you'll learn in the next 
      //    segment.
  
 

// async function getdatanew(){
// console.log("inside fetch function");
// const response=await fetch('https://api.github.com/users');
// console.log("before response to be parsed");
// const users=await response.json();
// console.log("after users resolved");
// return users;

// }

// console.log("before calling getdata func");
// let a=getdatanew();
// console.log("after calling getdata func");
// console.log(a);
// a.then(data=>console.log(data));
// console.log("end of a file");

//.............................another example of Async Await........................................

// try {
//      
//       async function getdata(){
//           const [res,res1]=await Promise.all([
//           fetch("https://api.github.com/users"),
//           fetch("https://api.github.com/users/1")
//           ]);
  
//          const re=await res.json();
//          const re1=await res1.json();
//          return [re,re1];
           
          
//       }
//       getdata().then(([re,re1])=>{
//           console.log(re);
//           console.log(re1);
//       })
//      
  
      
//   } catch (error) {
//       console.log(error);
//   }
//******************************one more async await example********* */

      // defining the async function which waits for the promise to be resolved / rejected
// const getName = async () => {
//     try {
//         let name = await namePromise;
//         console.log(`Name received from DB = ${name}`);
//     } catch (err) {
//         console.log(err);
//     }
// }

// // defining the promise object with the producer
// let namePromise = new Promise((resolve, reject) => {
//     console.log("Getting name from DB...");
//     setTimeout(() => {
//         resolve("Srishti");
//     }, 3000);
// });

// getName();



//5>*************************************ES6 classes***************************************
// class user{
//       constructor(name,email){
//               this.name=name;
//               this.email=email;
//           }
//           login=()=>{
//               console.log(`${name}logged in`);
//           }
//       }
//  ..........making object.......................
//       let user1=new user("vineet","vineee@gmail.com");
//       let user2=new user("vinay","vinay@gmail.com");
//       console.log(user1,user2);
      
      
//       let users=[user1,user2];
// ..............inheriting class..................
//       class admin extends user{
//           constructor(name,email,title){
//               super(name,email);
//               this.title=title;
//           }
//           deleteUser=(userToremove)=>{
//               users=users.filter((user)=> user!==userToremove);
//           }
//       }
//       let admin1=new admin("sharam","sharam@gmail.com","woooo");
//       console.log(users);
//       console.log(admin1.deleteUser(user1));
//       console.log(users);
      





//6>****************map(), filter(), reduce() methods**************************************
             
      // var input = [23,45,678,90,33,21,780,670,498,7493,58940,6565,900,370,1299,1300]
      //    var output=input.filter(function(inp){
      //          return inp%10==0;
                     
      //          })
      //          console.log(output)
         


      //    var input = [189.45, 12.89, 7.43, 167.98, 767.78, 23.89, 990.67, 289.7, 44.56, 97.65, 2345.87, 665.43, 7221.89, 58843.21];
      //    var output=input.map(function(inp){
      //                return inp*100;
                     
      //          })
      //          console.log(output)



      //    var input = [234, 567, 273, 456, 598, 635, 644, 718, 750, 753, 801];
      //    var output=input.reduce(function(x,y){
      //                return x+y;;
                     
      //          })
      //          console.log(output)


//7>*****************spread operator************************************

// const mergeStudents = (classA, classB) => {
//       var mergedClass=[...classA,"Emily","Frank",...classB];
//         console.log(mergedClass);
       
//    }
   
//    // arrays containing names of students in two classes
//    const classA = ["Alice", "Bob", "Catherine", "Dan"];
//    const classB = ["George", "Jane", "Katy", "Luis"];
              
//    mergeStudents(classA, classB); 




//8>*************************Rest Parameters****************************

// function calculateSumAfterTax(tax,...args){
//       var total=0;
//      for(const arg of args){
//       total+=arg+(arg*tax/100);
//      }
//      return total;
//   }
// // Printing the sum of all the prices - 10, 20, and 30 after tax of 10% (first argument) is applied on each of the prices (subsequent parameters)
// console.log(calculateSumAfterTax(10, 10, 20, 30));



//9>***********************Destructuring************************************

// /**
//  * Function to greet the user with his/her first name and last name
//  * @param {*} person 
//  */
//  const greetUser = (person) => {
//       // TODO: Use spread operator to get the values of the keys - firstName and lastName with alias names fn and ln respectively
//       const{firstName:fn ,lastName:ln}=person;
//       // WARNING: DO NOT EDIT THE LINE GIVEN BELOW
//       console.log("Hello " + fn + " " + ln + "!");
//   }
  
//   // object for a person
//   const person = {
//       firstName: "Srishti",
//       lastName: "Gupta",
//       nationality: "Indian",
//       gender: "Female"
//   };
  
//   greetUser(person);


//..................newsapp.......................................

// let newsAccordion=document.querySelector("#newsAccordion");
// let xhr=new XMLHttpRequest();
// xhr.open("GET"," https://newsapi.org/v2/top-headlines?country=us&apiKey=fa7c512d66464f9691cf858d99fbecd4",true);

// xhr.onload=function(){
//     if(this.status==200){
//     let json=JSON.parse(this.responseText);
//     let articles=json.articles;
//     console.log(articles);
//     let newshtml="";
//        articles.forEach(myfunc); 
//     function myfunc(element){
//         let news=`<div class="card">
//         <div class="card-header" id="headingOne">
//           <h2 class="mb-0">
//             <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne"
//               aria-expanded="true" aria-controls="collapseOne">
//               ${element["title"]}
//             </button>
//           </h2>
//         </div>

//         <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
//           <div class="card-body">
//            ${element["content"]}
//           </div>
//         </div>
//       </div>`
//       newshtml+=news;
        
//     };
//     newsAccordion.innerHTML=newshtml;
//     }
//     else{

//     }
// }
// xhr.send();


//********************************************* */
