import React, { useState ,useMemo} from 'react'

const UseMemoBasicExample = () => {
    const [counterOne,setCounterOne]=useState(0);
    const[counterTwo,setCounterTwo]=useState(0);
   
    const IncOne=()=>{
        setCounterOne(counterOne+1);
    }
    const IncTwo=()=>{
        setCounterTwo(counterTwo+1);
    }

    const isEven= useMemo(()=>{
        console.log("complex calc");
        let i=0;
        while(i<2000000000) i++;
        return counterOne%2==0;
    },[counterOne])
    

  return (
    <div>
      <button onClick={IncOne} className="btn btn-success">CounterOne-{counterOne}</button>
      <span>{isEven?"Even":"odd"}</span>
      <button onClick={IncTwo}  className="btn btn-success">CounterTwo-{counterTwo}</button>
    </div>
  )
}

export default UseMemoBasicExample
