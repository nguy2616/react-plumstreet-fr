import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";
import { api } from "./api/apiSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
    reducer: {
        [api.reducerPath] : api.reducer,
        auth: authSlice
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware().concat([api.middleware]),
    devTools: true
})


export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
setupListeners(store.dispatch)
export default store