import  changeTheNumber from "./upDown"

import { combineReducers } from "redux";

const rootReducer=combineReducers({
    changeTheNumber,
})
export  default rootReducer;


///we are using combineReducers bcz there may many reducers 
// can be there like for changing the background
//because at last we have to passt the single reducerobject to store