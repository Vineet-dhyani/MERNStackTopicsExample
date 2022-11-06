import React from 'react';
import ReactDOM, { createRoot } from 'react-dom/client';

import {BrowserRouter} from "react-router-dom"

// const Demo=()=>{
//   return <h1>{{name:"vineet",Age:"27"}}</h1>
// }
// import ReduxApp from "./REDUX/App"
// import store from './REDUX/store';
// import {Provider} from "react-redux"
// import App from './REDUXEXAMPLE/App';
// import store from "./REDUXEXAMPLE/store"
// import store from "./REDUXTOOLKIT/store"
// import App from './REDUXTOOLKIT/App'
// import {Provider} from "react-redux"
// import App from './reduxToolkit&AsyncThunk/App';
// import store from './reduxToolkit&AsyncThunk/store';
// import store from './REDUXtoolkitAnotherEXAMPLE/redux/store';
// import App from './REDUXtoolkitAnotherEXAMPLE/App';
import App from './MUIuseCase/App';

const root=createRoot(document.getElementById('root'));
root.render(
    <App/>
//* <Provider store={store}>
//<BrowserRouter>
//<App/>
//</BrowserRouter>
//</Provider> */}
);


// const obj=[{
// name:"vikash",
// age:"22"
// },{
//   name:"vivek",
//   age:"24"
// }
// ]

// function book(obj){
//   obj.map((objects)=>{
//     console.log(objects);
//   })
// }
// book(obj);