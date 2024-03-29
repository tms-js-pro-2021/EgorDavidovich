// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default function LoginForm() {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  // useEffect(() => {
  //     console.log('mounted');

  //     return () => {
  //         console.log('unmounting');
  //     }
  // }, []);

  const setAnyPassword = e => {
    setPassword(e.target.value);
  };

  const setAnyLogin = e => {
    setLogin(e.target.value);
  };

  const handleLoginClick = () => {
    // eslint-disable-next-line no-console
    console.log(`Login - ${login}`);
    // eslint-disable-next-line no-console
    console.log(`Password - ${password}`);
    setLogin('');
    setPassword('');
  };

  return (
    <div
      className="cls-1"
      style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url('https://klv-oboi.by/img/gallery/32/thumbs/thumb_l_38259.jpg')`,
        position: 'absolute',
        backgroundPosition: 'center'
      }}
    >
        <h1
          style={{ 
            marginTop: '50px',
            fontSize: '100px',
            textAlign: 'center',
            color: '#3f51b5',
          }}
        >
          WELCOME
        </h1>
      <div
        className="cls-form"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          maxWidth: '200px',
          margin: '120px auto',
        }}
      >

        <TextField
          className="cls-input"
          style={{ marginBottom: '10px' }}
          onChange={e => setAnyLogin(e)}
          id="outlined-basic"
          value={login}
          label="Login"
          variant="outlined"
        />
        <TextField
          onChange={e => setAnyPassword(e)}
          label="Password"
          value={password}
          type="password"
          variant="outlined"
        />
        <Button
          className="cls-btn"
          style={{ marginTop: '10px', height: '60px' }}
          variant="contained"
          color="primary"
          onClick={handleLoginClick}
        >
          Log In
        </Button>
      </div>
    </div>
  );
}
