import axios from "axios";
import { MessageModel } from "./models/messageModel";

export const getMessage = async(id: string, token: string) => {
    try{
        const req = await axios.get(`https://api.green-api.com/waInstance${id}/receiveNotification/${token}`);
        const message: MessageModel = req.data;
        return message;
    }catch(e){
        alert(e)
    }
}