/* eslint-disable no-undef */
import React from 'react';
import LightChatroom from './lightChatroom';
import Header from '../Mainpage/header'
import io from 'socket.io-client'
const Chat = () => {
    
    return(
        <body>
        <Header/>
        <LightChatroom/>
        </body>
    )
}

export default Chat;