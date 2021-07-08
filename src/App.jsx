import React, { useEffect, useState } from 'react';

export default function App() {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        console.log('mounted');

        return () => {
            console.log('unmounting');
        }
    }, []);

    const handleLoginClick = () => {
        setLogin('');
    };

    return (
        <div className ="cls-1" style={{background: 'blue'}}>
            <button onClick={() => setLogin("login")}>mount</button>
            {login && (
                <button onClick={handleLoginClick}>{login}</button>
            )}
        </div>
    );
}

