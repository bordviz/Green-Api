import {FC} from 'react';
import Logo from '../../components/Logo';
import LoginForm from './components/LoginForm';
import { login } from '../../redux/slices/loginSlice';
import { useSelector } from 'react-redux';
import { useActions } from '../../redux/hooks/useActions';

const Login:FC<{changeValue: (val:boolean)=>void}> = ({changeValue}) => {
    const loginValue = useSelector(login);
    const {setValue} = useActions();

    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue({
            ...loginValue,
            [e.target.name]: e.target.value
        });
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const {id, token} = loginValue;
        if (id === '' || token === '') return alert('Поле не может быть пустым');
        changeValue(true);
    }

    return(
        <div className='w-screen h-fit min-h-screen overflow-x-hidden'>
            <div className='w-full h-52 bg-c-green fixed top-0 z-0'>
                <div className='w-3/4 mx-auto relative left-0 top-14'><Logo/></div>
            </div>
            <div className='w-3/4 p-6 mx-auto mt-32 h-fit relative bg-white z-10 rounded-md flex flex-col gap-6'>
                <h1 className='text-3xl text-c-second'>Авторизация</h1>
                <h1 className='text-c-second'>
                    Введите поля "idInstance" и "apiTokenInstance" полученные на сайте <span className='font-medium text-c-green'>https://green-api.com/</span>
                </h1>
                <LoginForm onChange={onChange} onSubmit={onSubmit}/>
            </div>
        </div>
    )
}

export default Login