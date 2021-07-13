import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function App() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     console.log('mounted');

    //     return () => {
    //         console.log('unmounting');
    //     }
    // }, []);

    const setAnyPassword = (e) => {
        setPassword(e.target.value);
    };

    const setAnyLogin = (e) => {
        setLogin(e.target.value);
    };


    const handleLoginClick = () => {
        console.log(`Login - ${login}`)
        console.log(`Password - ${password}`)
        setLogin("")
        setPassword("")
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
                <TextField  style={{ marginBottom: '10px' }} value={login} onChange={(e) => setAnyLogin(e)} id="outlined-basic" label="Login" variant="outlined" />
                <TextField onChange={(e) => setAnyPassword(e)}  label="Password" value={password} type="password" variant="outlined" />
                <Button style={{ marginTop: '10px', height: '60px' }} variant="contained" color="primary" onClick = {handleLoginClick}>Log In</Button>
            </div>
        </div>
    );
}
