import React, { useEffect, useState } from 'react';

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
        setPassword({ '': password.target.value });
      };

      const setAnyLogin = (login) => {
        setLogin({ '': login.target.value });
      };


    const handleLoginClick = () => {
        console.log('Login-', login)
        console.log('Password-', '*****')
    };

    return (
        <div className="cls-1" style={{
            width: '100%',
            maxWidth: '160px',
            margin: '0 auto',
        }}>
            <div className="cls-form" style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <input className="cls-input" style={{ marginBottom: '10px' }} onChange={(e) => setAnyLogin(e)} type="text"  placeholder="Login"></input>
                <input className="cls-input" style={{ marginBottom: '10px' }} onChange={(e) => setAnyPassword(e)} type="password"  placeholder="Password"></input>
                <button onClick={(e) => {
                    handleLoginClick()}}>Log In</button>
            </div>
   
        </div>
    );
}