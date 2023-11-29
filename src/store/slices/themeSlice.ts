import {createSlice} from "@reduxjs/toolkit";

interface IState {
    theme: boolean;
}

const initialState:IState = {
    theme: JSON.parse(localStorage.getItem("theme")) || false
}

const themeSlice = createSlice({
    name: "themeSlice",
    initialState,
    reducers:{
        setTheme: (state, action) => {
            state.theme = action.payload
            localStorage.setItem("theme", JSON.stringify(action.payload))
        }
    }
})

const {reducer: themeReducer, actions} = themeSlice;
const themeActions = {
    ...actions
}
export {
    themeActions,
    themeReducer
}