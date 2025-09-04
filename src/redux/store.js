import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./slices/productSlice";
import workerReducer from "./slices/workerSlice";
import { thunk } from "redux-thunk";
export const store = configureStore({
  reducer: {
    products: productReducer,
    workers: workerReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),});
