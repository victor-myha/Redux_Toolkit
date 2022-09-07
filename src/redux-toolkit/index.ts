import {combineReducers, configureStore} from "@reduxjs/toolkit";
import usersSlice from "./usersSlice";

const rootReducer = combineReducers({
    usersSlice: usersSlice
})

export const store = configureStore({
    reducer: rootReducer
})

export type RootState = ReturnType<typeof store.getState>