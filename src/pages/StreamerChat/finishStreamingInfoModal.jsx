/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import moment from 'moment';
import axios from 'axios';

const finishStreamingInfoModal = ({onClose, setOnClose, data}) => {
    const streaming = data;
    const modalRef = useRef(null);
    const cancleRef = useRef(null);
    const [recordUrl, setRecordUrl] = useState('');
    console.log(streaming);
    // useEffect(()=>{
    //     axios.get(`${process.env.REACT_APP_NODE_URL}/streaming/finishRecord`, {
    //         params: {
    //             userId: streaming.userId,
    //         }
    //     })
    //     .then((response)=>{
    //         console.log(response.data);
    //     })
    // })

    useEffect(()=>{
            axios.post('/community/finishStreaming',
                {
                    userId: streaming.userId,
                    streamingNo: streaming.streamingPk,
                }
            );
    },[])
    useEffect(()=> {
        const handler = (event) => {
            if (modalRef.current && !modalRef.current.contains(event.target)) {
                setOnClose(false); 
            }
        };
        document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
    }, [onClose]);
    
    const onClickCancle = ()=>{
        const handler = () => {
        if(cancleRef.current){
            setOnClose(false);
        }
    };
    document.addEventListener('mousedown', handler);
        return () => {
            document.removeEventListener('mousedown', handler);
        };
        
    }

    const getCategory = (categoryId) => {
        let result;
        switch(categoryId) {
            case '1':
                result = '게임';
                break;
            case '2':
                result = '일상';
                break;
            case '3':
                result = '스포츠';
                break;
            case '4':
                result = '먹방';
                break;
            case '5':
                result = '요리';
                break;
            case '6':
                result = '교육';
                break;
            default:
                break;
        }
        return result;
      }

    return (
        <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>
            <Layer_in>
                <Send_area>
                    <Gift_at>
                        <Gift_dt>
                            <h2>{streaming.userNickname}님의 스트리밍 정보입니다.</h2>
                            <br/><br/>

                            <h3>스트리밍 제목</h3>
                            <Gift_strong>{streaming.streamingTitle}</Gift_strong>
                            <br/><br/>

                            <h3>스트리밍 카레고리</h3>
                            <Gift_strong>{getCategory(streaming.streamingCategory)}</Gift_strong>
                            <br/><br/>
                            
                            <h3>스트리밍 시작시간</h3>
                            <Gift_strong>{streaming.streamingStartTime}</Gift_strong>
                            <br/><br/>

                            <h3>스트리밍 종료시간</h3>
                            <Gift_strong>{moment().format('YYYY-MM-DD/HH:mm')}</Gift_strong>
                            <br/><br/>

                            <h3>총 시청자수</h3>
                            <Gift_strong>{streaming.totalStreamingViewer}</Gift_strong>
                            <br/><br/>

                            <h3>누적 후원금액</h3>
                            <Gift_strong>{streaming.totalDonationAmount}</Gift_strong>
                            <br/><br/>
                        </Gift_dt>
                    </Gift_at>
                    <Button_area>
                        <Button_cancle_button><Link to='/'>확인</Link></Button_cancle_button>
                    </Button_area>
                </Send_area>
            </Layer_in>
        </Modal>
    </Outline_area_2> 
    )
}

export default finishStreamingInfoModal;