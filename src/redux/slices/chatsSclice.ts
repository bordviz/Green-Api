import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

export interface ChatType{
    phone: string
}

const chatsSlice = createSlice({
    name: 'chats',
    initialState: [] as ChatType[],
    reducers: {
        setNewChat: (state, {payload})=>{
            state.push(payload)
        }
    }
})

export default chatsSlice
export const chats = (state: RootState) => state.chats;