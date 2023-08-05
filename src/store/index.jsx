import { createStore } from "redux";
import authSlice from "./slice/auth";

import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        auth: authSlice.reducer
    },
});

export default store;