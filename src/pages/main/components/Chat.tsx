import { FC } from "react";
import { ChatType } from "../../../redux/slices/chatsSclice";
import { MessageType, messages } from "../../../redux/slices/messagesScice";
import MessageCard from "./MessageCard";
import { useSelector } from "react-redux";
import ChatInput from "./ChatInput";
import { login } from "../../../redux/slices/loginSlice";


const Chat:FC<{chat: ChatType}> = ({chat}) => {
    const messagesList = useSelector(messages);
    const loginData = useSelector(login);
    const {phone} = chat;

    return(
        <div className='w-2/3 h-screen'>
            <div className='w-full h-[8%] p-3 flex items-center bg-c-second gap-2'>
                <div className='flex items-center gap-2'>
                    <div className='w-10 h-10 bg-pink-500 rounded-full'></div>
                    <h1 className='font-light text-lg text-white'>+{phone[0]} ({phone.slice(1,4)}) {phone.slice(4,7)}-{phone.slice(7,9)}-{phone.slice(9,11)}</h1>
                </div>
            </div>
            <div className="w-full h-[84%]">
                <div className="w-full h-full flex flex-col gap-3 p-4 overflow-y-scroll">
                    {
                        messagesList.map((el: MessageType, id)=>{
                            if(el.chat === phone){
                                return(
                                    <MessageCard key={id} time={el.time} myMessage={el.myMessage}>{el.text}</MessageCard>
                                )
                            }
                        })
                    }
                </div>
            </div>
            <ChatInput id={loginData.id} token={loginData.token} phone={phone}/>
        </div>
    )
}

export default Chat