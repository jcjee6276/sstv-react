import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { type } from "@testing-library/user-event/dist/type";

const LoadingPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState(null);

  const requestServiceUrl = async () => {
    const getServiceUrlResponse = await axios.create({
      baseURL : 'http://localhost:3001',
      withCredentials : true
    }).get('/streaming/getServiceUrl');
    
    const result = (JSON.parse(getServiceUrlResponse.data)).result;
    if(result === 'success') {
      const getStreamingResponse = await axios.create({
        baseURL : 'http://localhost:3001',
        withCredentials : true
      }).get('/streaming/getMyStreamingPage');

      const data = getStreamingResponse.data
      const streaming = data.firstData;
      const serviceUrl = data.secondData;

      alert('success streaming = ' + streaming);
      alert('success streaming = ' + serviceUrl);

      navigate('/streamerChat', {
        state : {
          streaming : streaming,
          serviceUrl : serviceUrl
        }
      });
    }else {
      setResponse(getServiceUrlResponse.data);
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      requestServiceUrl();
      setCount((prevCount) => prevCount + 1);
    }, 10000);

    return () => {
      clearInterval(interval);
    }
  }, []);

  return (
    <div>
      <h1>{count * 0.5}분 지나감</h1>
      <h1>요청결과{response}</h1>
    </div>   
  )
}

export default LoadingPage;