import { FC, useState } from "react";
import send from '../../../assets/send.svg';
import { getTime, sendMessage } from "../../../api/sendMessage";
import { useActions } from "../../../redux/hooks/useActions";

interface ChatInputProps{
    id: string,
    token: string,
    phone: string,
}

const ChatInput:FC<ChatInputProps> = ({id, token, phone}) => {
    const [message, setMessage] = useState('');
    const {addMessage} = useActions()

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await sendMessage(id, token, {chatId: `${phone}@c.us`, message: message});
        const time = getTime();
        addMessage({time: time, text: message, myMessage: true, chat: phone});
        setMessage('');

    }

    return(
        <div className="w-full h-[8%] p-3 flex justify-center items-center bg-c-second">
            <form onSubmit={(e)=>onSubmit(e)}
            className="w-full flex justify-between gap-2">
                <input
                type="text"
                value={message}
                placeholder="Введите сообщение"
                onChange={(e)=>onChange(e)}
                className="bg-c-gray outline-none px-3 py-2 rounded-md text-white w-full"
                ></input>
                <button
                type="submit"
                >
                    <img src={send} alt="" className="w-8 h-8 opacity-80 hover:opacity-100"></img>
                </button>
            </form>
        </div>
    )
}

export default ChatInput;