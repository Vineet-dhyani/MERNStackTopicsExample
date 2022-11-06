import { createStore } from "redux";
import rootReducer from "./reducers/index";

const store=createStore(rootReducer);

export default store;

//we create the store and  wehave pass the rootreducer to it
