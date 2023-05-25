import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface MessageType{
    time: string,
    text: string,
    myMessage: boolean,
    chat: string
}

const messagesSlice = createSlice({
    name: 'messages',
    initialState: [] as MessageType[],
    reducers: {
        addMessage: (state, {payload})=>{
            state.push(payload);
        }
    }
});

export default messagesSlice;
export const messages = (state: RootState) => state.messages;