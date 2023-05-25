import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "@reduxjs/toolkit";
import loginSlice from "../slices/loginSlice";
import chatsSlice from "../slices/chatsSclice";
import messagesSlice from "../slices/messagesScice";

const rootActions = {
    ...loginSlice.actions,
    ...chatsSlice.actions,
    ...messagesSlice.actions
}

export const useActions = () => {
    const dispatch = useDispatch();
    return useMemo(()=>bindActionCreators(rootActions, dispatch), [dispatch])
}