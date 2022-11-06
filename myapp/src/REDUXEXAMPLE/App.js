import React from 'react'
import { useSelector ,useDispatch} from 'react-redux';
import { incNumber,decNumber } from './actions/index';

const App = () => {
    const myState =useSelector((state)=>state.changeTheNumber);
     const dispatch=useDispatch();
  return (
    <div className='container'>
        <h1>Increment/Decrement Counter</h1>
         <h4>Using React And Redux</h4>
         <div>
            <button onClick={()=>dispatch(incNumber())}><span>+</span></button>
            <input type="text" value={myState}/>
            <button onClick={()=>dispatch(decNumber())}><span>-</span></button>
         </div>
    </div>
  )
}

export default App
//useSelector  allows extract data from store