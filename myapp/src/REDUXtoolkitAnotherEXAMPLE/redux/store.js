import { configureStore } from "@reduxjs/toolkit";
import PostSlice from "./features/Postslice";


export default configureStore({
    reducer:{
        app:PostSlice,
    }
})