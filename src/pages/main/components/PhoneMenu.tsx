import { FC, useState } from "react";
import { useActions } from "../../../redux/hooks/useActions";
import { useSelector } from "react-redux";
import { ChatType, chats } from "../../../redux/slices/chatsSclice";

interface PhoneMenuProps{
    close: (val: boolean)=>void;
}

const PhoneMenu:FC<PhoneMenuProps> = ({close}) => {
    const [number, setNumber] = useState('');
    const chatsList = useSelector(chats);
    const {setNewChat} = useActions();

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if(e.target.value === '') return setNumber('');
        const lastEl = e.target.value[e.target.value.length - 1];
        if (isNaN(parseInt(lastEl))) return;
        setNumber(e.target.value);
    }

    const addChat = () => {
        if(number.length < 11) return alert('Номер введен некорректно');
        const newChat: ChatType = {
            id: chatsList.length + 1,
            phone: number
        }
        setNewChat(newChat);
        setNumber('');
        close(false);
    }

    return(
        <div className="w-screen h-screen z-50 absolute bg-c-gray/60 backdrop-blur-sm flex justify-center items-center">
            <div className="w-fit p-2 flex flex-col justify-center items-center gap-2 bg-white rounded-md">
                <input
                type="text"
                value={number}
                maxLength={11}
                placeholder="78888888888"
                onChange={(e)=>onChange(e)}
                className="px-4 py-1 rounded-md outline-none text-lg text-white bg-c-gray"
                ></input>
                <div className="flex justify-center items-center gap-2">
                    <button
                        type="button"
                        onClick={()=>close(false)}
                        className="font-light text-lg px-3 bg-c-second text-white rounded-md"
                        >
                            Закрыть
                    </button>
                    <button
                        type="button"
                        onClick={()=>addChat()}
                        className="font-light text-lg px-3 bg-c-second text-white rounded-md"
                        >
                            Добавить
                    </button>
                </div>
            </div>
        </div>
    )
}

export default PhoneMenu