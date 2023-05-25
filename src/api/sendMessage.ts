import axios from "axios";

export interface SendMessageType{
    chatId: string,
    message: string
}

export const getTime = ():string => {
    let date_time = new Date();
    let hours = date_time.getHours();
    let minutes = date_time.getMinutes();
    const full_date = `${hours}:${minutes}`
    return full_date;
}

export const sendMessage = async (id: string, token: string, body: SendMessageType) =>{
    try{
        const headers = {
            'Content-Type': 'application/json'
        }
        const req = await axios.post(`https://api.green-api.com/waInstance${id}/SendMessage/${token}`, body, {headers: headers});
        return req.status;
    }catch(e){
        alert(e);
    }
}