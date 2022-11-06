import React, { createContext } from 'react';
import CompA from './CompA';




// const ContextApi = () => {
//   const channel="CODING";
//     return (
                          
//    <CompA channel={channel}/>
                          
//        )
//    }
//above code is propdrilling example
 
const  channel=createContext();
const  Greeting=createContext();
const ContextApi = () => {
  
  return (
    <channel.Provider value={"CODING"} >
      <Greeting.Provider  value={"Thank you"}>
      <CompA />
      </Greeting.Provider>
     </channel.Provider>
  )
}

export default ContextApi;
export {channel,Greeting};
