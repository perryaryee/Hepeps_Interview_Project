import { configureStore, combineReducers } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { api } from '../Api/apiSlice';
import modalreducer from "../Slices/ModalSlice";

const persistConfig = {
    key: "root",
    storage,
};

const reducers = combineReducers({
    // user: userReducer,
    [api.reducerPath]: api.reducer,
    modal: modalreducer
});

const persistedReducer = persistReducer(persistConfig, reducers);



export default configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(api.middleware),
});

