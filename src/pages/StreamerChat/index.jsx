import { React, useEffect, useState } from 'react';
import LightChatroom from './lightChatroom';
import Header from '../Mainpage/header'
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Chat = () => {
    const location = useLocation();

    const [streaming, setStreaming] = useState(null);
    const [serviceUrl, setServiceUrl] = useState(null);
    
    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:3001/streaming/getMyOnGoingStreamingPage',
            {
                withCredentials : true
            });
            
            const data = response.data
            const result = response.data.result;
            const streaming = data.firstData;
            const serviceUrl = data.secondData;

            if(result == 'success') {
                setStreaming(streaming);
                setServiceUrl(serviceUrl);
            }
        }

            fetchData();
    },[])

    if (streaming && serviceUrl) {
        return (
          <body>
            <Header />
            <LightChatroom data={{ streaming, serviceUrl }} />
          </body>
        );
      }

    // return(
    //     <body>
    //     <Header/>
    //     <LightChatroom data = {{streaming, serviceUrl}}/>
    //     </body>
    // )
}

export default Chat;