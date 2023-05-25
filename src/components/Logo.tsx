import {FC} from 'react';
import logo from '../assets/headerLogo.png';

const Logo:FC = () => {
    return(
        <div className='w-fit flex justify-center items-center gap-2'>
            <img src={logo} alt='' className='w-12 object-contain'></img>
            <h1 className='font-semibold text-lg text-white'>Green Api</h1>
        </div>
    )
}

export default Logo