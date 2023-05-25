import { FC } from "react";

interface LoginProps{
    onChange: (e: React.ChangeEvent<HTMLInputElement>)=>void,
    onSubmit: (e: React.FormEvent<HTMLFormElement>)=>void
}

const LoginForm:FC<LoginProps> = ({onChange, onSubmit}) => {
    return(
        <form onSubmit={(e: React.FormEvent<HTMLFormElement>)=>onSubmit(e)} className='flex flex-col items-start gap-6'>
            <input 
                type='text'
                name='id'
                placeholder='idInstance' 
                onChange={(e)=>onChange(e)}
                className='bg-c-gray outline-none px-3 py-2 rounded-md text-white w-2/5'>
            </input>
            <input
                type='text' 
                name='token'
                placeholder='apiTokenInstance'
                onChange={(e)=>onChange(e)}
                className='bg-c-gray outline-none px-3 py-2 rounded-md text-white w-2/5'>
            </input>
            <button 
                type='submit'
                className='bg-c-green text-white px-3 py-2 rounded-lg'>
                    Отправить
            </button>
        </form>
    )
}

export default LoginForm