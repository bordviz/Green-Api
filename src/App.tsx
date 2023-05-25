import {FC, useState} from 'react';
import Main from './pages/main/Main';
import Login from './pages/login/Login';


const App:FC = () => {
  const [isLogin, changeLoginSuccess] = useState(false);
  return isLogin ? <Main/> : <Login changeValue={changeLoginSuccess}/>
}


export default App