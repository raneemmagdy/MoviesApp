import { configureStore } from "@reduxjs/toolkit";
import { searchReducer } from "./searchSlice";


export let globalStore=configureStore({
    reducer:{
        search:searchReducer
    }
})