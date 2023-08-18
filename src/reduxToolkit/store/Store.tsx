import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import KioskSlice from "../Slices/KioskSlice";

const store=configureStore({
    reducer:{
        kiosk:KioskSlice
    }
},
applyMiddleware(thunk))

export default store;
