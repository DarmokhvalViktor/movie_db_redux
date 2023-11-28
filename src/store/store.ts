import {configureStore} from "@reduxjs/toolkit";
import {moviesReducer, themeReducer} from "./slices";

const store = configureStore({
    reducer: {
        movies: moviesReducer,
        theme: themeReducer
    }
})

export {
    store
}