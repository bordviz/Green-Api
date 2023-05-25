import {FC, useEffect, useState} from 'react';
import NavBar from './components/NavBar';
import PhoneMenu from './components/PhoneMenu';
import ChatMenuCard from './components/ChatMenuCard';
import { ChatType, chats } from '../../redux/slices/chatsSclice';
import { useSelector } from 'react-redux';
import Chat from './components/Chat';
// import { login } from '../../redux/slices/loginSlice';
import { getMessage } from '../../api/getMessage';
import { MessageModel } from '../../api/models/messageModel';
import { useActions } from '../../redux/hooks/useActions';
import { deleteMessage } from '../../api/deleteMesage';
import { getTime } from '../../api/sendMessage';


const Main:FC = () => {
    const [phoneMenu, toggleMenu] = useState(false);
    const [activeChat, changeChat] = useState<ChatType | null>(null);
    // const loginDate = useSelector(login);
    
    const chatList = useSelector(chats);
    const {addMessage} = useActions();

    const getData = async() => {
        while(true){
            const id= '1101824043'
            const token = 'c4e59c94a6ef4b2fb2b7cff3cdba294ccc7b3839a3434d9fbb'
            const message:MessageModel | undefined = await getMessage(id, token);
            if(message !== null){
                const time = getTime();
                const chat = message?.body.senderData.chatId.slice(0, message?.body.senderData.chatId.length-5);
                const recipeId = message?.receiptId;
                let text;
                try{
                    text = message?.body.messageData.textMessageData.textMessage;
                }catch{
                    text = ''
                }
                if(text !== ''){
                    addMessage({time: time, chat: chat, myMessage: false, text: text});
                }
                await deleteMessage(id, token, recipeId!);
            }
        }
        
    }

    useEffect(()=>{
        getData();
    },[])
    return(
        <div className='w-screen h-screen overflow-hidden flex'>
            {phoneMenu && (<PhoneMenu close={toggleMenu}/>)}
            <div className='w-1/3 h-full bg-c-primary border-r-[0.1px] border-r-white/30'>
                <NavBar onClick={toggleMenu}/>
                <div className='p-1'>
                    {
                        chatList.map((el:ChatType, id)=>(
                            <ChatMenuCard key={id} chat={el} onClick={changeChat}/>
                        ))
                    }
                </div>
            </div>
            {
                activeChat !== null && (<Chat chat={activeChat}/>)
            }
        </div>
    )
}

export default Main
