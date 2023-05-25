import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface FormInputType{
    id: string,
    token: string
}

const init:FormInputType = {id: '', token: ''}; 

const loginSlice = createSlice({
    name: 'login',
    initialState: init,
    reducers: {
        setValue: (state, {payload}) => {
            const {id, token} = payload;
            state.id = id;
            state.token = token;
        }
    }
});

export default loginSlice;
export const login = (state: RootState) => state.login;