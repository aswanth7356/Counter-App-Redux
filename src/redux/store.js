import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store=configureStore({
    reducer:{
        counterReducer:counterSlice
    }
})

export default store