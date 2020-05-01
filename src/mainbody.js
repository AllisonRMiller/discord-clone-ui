import React, { useState } from 'react';
import Landing from './landing';
import LoginForm from './login';

const [clickedLoginBtn, setClickedLoginBtn] = useState(false);

const WTFIsUp = () => {
    return (
        <React.Fragment>
        {
            clickedLoginBtn ?
            <LoginForm />
            :
            <Landing onClickLogin={() => setClickedLoginBtn(true)} />
        }
        </React.Fragment>
    );
}

export default WTFIsUp;