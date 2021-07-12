import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';

export default function App() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     console.log('mounted');

    //     return () => {
    //         console.log('unmounting');
    //     }
    // }, []);

    const setAnyPassword = (password) => {
        setPassword({ 'Password': password.target.value });
    };

    const setAnyLogin = (login) => {
        setLogin({ 'Login': login.target.value });
    };


    const handleLoginClick = () => {
        console.log(login)
        console.log(password)
    };

    return (
        <div className="cls-1" style={{
            width: '100%',
            maxWidth: '160px',
            margin: '0 auto'
        }}>
            <div className="cls-form" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <input className="cls-input" style={{ marginBottom: '10px' }} onChange={(e) => setAnyLogin(e)} type="text" placeholder="Login"></input>
                <input onChange={(e) => setAnyPassword(e)} type="password" placeholder="Password"></input>
                <Button className="cls-btn" style={{ marginTop: '10px' }} variant="contained" color="primary" onClick={(e) => { handleLoginClick() }}>Log In</Button>
            </div>
        </div>
    );
}
