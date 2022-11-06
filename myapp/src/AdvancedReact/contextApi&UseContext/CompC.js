import React, { useContext } from 'react'
import { channel,Greeting } from './ContextApi'

// const CompC = ({channel}) => {
  // return (
  // <div>
  // <h1>Hello ! Welcome to {channel} Channel</h1>
  // </div>
  // )
  // }

// above code is propsdrilling exammple

// const CompC = () => {
//   return (
//     <>
//     <channel.Consumer>
//       {(channel)=>{
//         return (
//             <Greeting.Consumer>
//                 {(greeting)=>{
//                     return(
//                     <h1>Hello ! Welcome to {channel} Channel.{greeting} for reaching us</h1>
//                     )
//                 }}
//             </Greeting.Consumer>
//         )
//       }}
//       </channel.Consumer>
//       </>
//   )
// }
// above code contextApi


const CompC = () => {
  const Channel=useContext(channel);
  const greeting=useContext(Greeting);
  return (
   <h1>Hello ! Welcome to {Channel} Channel.{greeting} for reaching us</h1>
   )
}


export default CompC
