import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { authInterface } from "../../interfaces/authInteface";
import { RootState } from "../store";

const initialState = {
    token: '',
    user: {}
}
const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.token = action.payload.jwt
            state.user = action.payload.user
        },
        logout: (state, action) => {
            state.token = ''
            state.user = {}
        }
    }
})

export const { setCredentials, logout } = authSlice.actions

export const getAuth = (state: RootState) => state.auth
export default authSlice.reducer


