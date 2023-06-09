import React from "react";
import axios from "axios";
import { useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";
import _ from "lodash";
import { Snowflakes, RippleBox, Button, Center } from "./components";
import ReactModal from "react-modal";
import "./styles.css";


const LoadingPage = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(0);
  const [response, setResponse] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
      생성중 {response}
      {/* <Snowflakes style={{ height: 1000 }}>
        <Center>
          <h1 style={{ color: "white", fontSize: "40px" }}>
            SSTV 스트리밍 시작방법을 알려드릴게요!
          </h1>
          <Button onClick={openModal}>시작방법 보기</Button>
          <ReactModal
            isOpen={isOpen}
            onRequestClose={_.debounce(closeModal, 300)}
            overlayClassName="modal-overlay"
            className="modal-content"
          >
            <RippleBox>
              <div onClick={_.debounce(closeModal, 300)}>X</div>
              <Center
                style={{
                  width: "100%",
                  textAlign: "center",
                  fontSize: "40px",
                  color: "white"
                }}
              >
                <div>
                  1. OBS를 다운받으세요
                  <img
                    src="https://advertise.kr.object.ncloudstorage.com/loadingPage1.png"
                    alt="#"
                    className="img-size"
                  />
                </div>
              </Center>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <Button>Previous</Button>
                <Button>Next</Button>
              </div>
            </RippleBox>
          </ReactModal>
        </Center>
      </Snowflakes> */}
    </div>
  );

}

export default LoadingPage;