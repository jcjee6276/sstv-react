import React from 'react';
import LightChatroom from './lightChatroom';
import Header from '../Mainpage/header'
import { useLocation } from 'react-router-dom';

const Chat = () => {
    const location = useLocation();
    const {streaming} = location.state;
    const {serviceUrl} = location.state;

    return(
        <body>
        <Header/>
        <LightChatroom data = {{streaming, serviceUrl}}/>
        </body>
    )
}

export default Chat;