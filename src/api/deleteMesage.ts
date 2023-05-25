import axios from "axios";

export const deleteMessage = async(id: string, token: string, receiptId: number) => {
    try{
        return await axios.delete(`https://api.green-api.com/waInstance${id}/deleteNotification/${token}/${receiptId}`);
    }catch(e){
        alert(e);
    }
} 