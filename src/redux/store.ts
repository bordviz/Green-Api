import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./slices/loginSlice";
import chatsSlice from "./slices/chatsSclice";
import messagesSlice from "./slices/messagesScice";

export const store = configureStore({
    reducer: {
        login: loginSlice.reducer,
        chats: chatsSlice.reducer,
        messages: messagesSlice.reducer
    }
});

export type RootState = ReturnType<typeof store.getState>