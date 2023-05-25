import { FC } from "react";
import chat from '../../../assets/chat.svg';

const NavBar:FC<{onClick: (val:boolean)=>void}> = ({onClick}) => {
    return(
        <div className='w-full h-[8%] p-3 flex justify-between items-center bg-c-second'>
            <div className='flex items-center gap-2'>
                <div className='w-10 h-10 bg-c-green rounded-full'></div>
                <h1 className='font-light text-lg text-white'>Мои чаты</h1>
            </div>
            <button
            type='button'
            onClick={()=>onClick(true)}
            className='w-8 h-8 opacity-80'
            >
                <img src={chat} alt='' className='object-contain'></img>
            </button>
        </div>
    )
}

export default NavBar