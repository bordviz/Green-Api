import { FC, ReactNode } from "react";

interface MessageCardProps{
    children: ReactNode,
    myMessage: boolean,
    time: string,
}

const MessageCard:FC<MessageCardProps> = ({children, myMessage, time}) => {
    return(
        <div className={`w-fit h-fit p-2 flex justify-start items-center gap-1 rounded-b-lg ${myMessage? 'bg-c-green ml-auto rounded-tl-lg': 'bg-c-second mr-auto rounded-tr-lg'} text-white`}>
            {children}
            <div className="mt-3 text-white/60 text-sm">{time}</div>
        </div>
    )
}

export default MessageCard