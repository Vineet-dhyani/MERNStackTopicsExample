import http from "http";
import fs from 'fs';
import {writeFile, readFile}  from "fs/promises";
const port = 3000;

      ///function for reading file using promise//
const getPath=(path)=>{
   return new Promise((resolve,reject)=>{
   fs.readFile(path,"utf-8",(err,data)=>{
    if(err){
        reject(err);
    }
    else{
        resolve(data);
    }
   })
   })
}
     ///function for reading file using Async//
const getData=async (path)=>{
    const data=await readFile(path,"utf8");
    return new Promise((resolve,reject)=>{
        if(data){
            resolve(data);
           
        }
        else{
            reject("no data found");
        } 
    })
 }
 const putData=async (path,data,append)=>{
  await writeFile(path,data,{flag:append?"a":""});
   
 }

 

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        res.writeHead(200, "OK", { "content-type": "text/html" })
                  ///serving static pages////

        // fs.readFile("./index.html","utf-8",(err,data)=>{
        //     if(err){
        //         res.end(err);
        //     }
        //     else{
        //         res.end(data);
        //     }
        // })

                  ///reading multiple files and write in file using Async func////

        // fs.readFile("./Text-Files/file1.txt", "utf-8", (err, data) => {
        //     if (err) {
        //         res.end(err);
        //     } else {
        //         const firstdata = data;
        //         fs.readFile("./Text-Files/file2.txt", "utf-8", (err, data) => {
        //             if (err) {
        //                 res.end(err);
        //             } else {
        //                 const Seconddata = data;
        //            fs.writeFile("./Text-Files/newText.txt", `\nthe data of 
        //            combined file  is:${firstdata}\n ${Seconddata}`,{flag:"a"},()=>{
        //             console.log("done writing");
        //            })


        //             }
        //         })
        //     }
        // })


                 ////problem using synchronous function///////////
        
       
    //      res.end("<h1>Homepage</h1>");
    //     }
    //    else if(req.url==="/About"){
    //         for (let index = 0; index <100000; index++) {
    //             console.log(index);
                
    //         }
    //         res.end("<h1>About page</h1>");
    //     }
    //     else{
    //         res.end("<h1>Error Page</h1>");
    //     }
        
             //function for reading file using promises///

                    // getPath("./index.html")
                    // .then((data)=>{
                    //     res.end(data);
                    // }).catch((err)=>{
                    //     res.end(err);
                    // })
        
                //function for reading file using Async///
           
         getData("./index.html")
          .then((data)=>{
              res.end(data)
          }).catch((err)=>{
            res.end(err);
           })
         }
            else if(req.url==="/About"){
                getData("./about.html")
                .then((data)=>{
                    res.end(data)
                }).catch((err)=>{
                    res.end(err);
                })
            }
                 ///here we are reading big size file////
                    //    if size of file increases so server will Slow
                    //    to send the res so for this we use inputstream ,
                    //   readtstrea in nodejs..which send data into chunk 
            else if(req.url==="/Data"){
                getData("./Text-files/file5.txt")
                .then((data)=>{
                    res.end(data)
                }).catch((err)=>{
                    res.end(err);
                })
            }
            else{
                getData("./errorPage.html")
                .then((data)=>{
                    res.end(data)
                }).catch((err)=>{
                    res.end(err);
                })
                // putData("./Text-files/file4.txt","just testing this method",false);
            }

})

server.listen(port); 
