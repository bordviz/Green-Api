import {FC} from 'react'
import { ChatType } from '../../../redux/slices/chatsSclice'

interface ChatMenuCardProps{
    chat: ChatType
    onClick: (val: ChatType)=>void,
}

const ChatMenuCard:FC<ChatMenuCardProps> = ({chat, onClick}) => {
    const {phone} = chat;
    return(
        <div onClick={()=>onClick(chat)} className='w-full p-3 flex items-center gap-4 border-b border-b-white/50 hover:bg-c-second duration-200'>
            <div className='w-10 h-10 bg-pink-500 rounded-full'></div>
            <h1 className='font-light text-lg text-white'>+{phone[0]} ({phone.slice(1,4)}) {phone.slice(4,7)}-{phone.slice(7,9)}-{phone.slice(9,11)}</h1>
        </div>
    )
}

export default ChatMenuCard
