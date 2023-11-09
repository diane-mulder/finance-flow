import { useState } from 'react';
import './login.css';

function Login (props) {

    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return (

        <div>
            <img src='./public/logo-totally-bank.png'></img>
            <h1>Se connecter</h1>
            <h2>S'inscrire</h2>
            <input type="text" placeholder='login' onChange={(e) => {setName(e.target.value)}}/>
            <input type="password" placeholder='password' onChange={(e) => {setPassword(e.target.value)}}/>

            <button onClick={() => {props.connexion(name,password)}}><span>Connexion</span></button>
        </div>
    )  
}

export default Login;