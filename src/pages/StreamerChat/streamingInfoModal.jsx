/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import moment from 'moment';

const streamingInfoModal = ({onClose, setOnClose, data}) => {
    const streaming = data;
    const modalRef = useRef(null);
    const cancleRef = useRef(null);
    
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

    const handleCopyText = (flag) => {
        let textToCopy;

        switch(flag) {
            case 0 :
            textToCopy = streaming.publishUrlWithAd;
            break;

            case 1 :
            textToCopy = streaming.streamKeyWithAd;
            break;

            case 2 :
            textToCopy = streaming.publishUrlWithOutAd;
            break;

            case 3 :
            textToCopy = streaming.streamKeyWithOutAd;
            break;

            default :
            break;
        }

        const $textarea = document.createElement('textarea');
        document.body.appendChild($textarea);
        $textarea.value = textToCopy;
        
        alert('복사되었습니다.');
        
        $textarea.select();
        document.execCommand('copy');
        document.body.removeChild($textarea);
      };

    return (
        <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>
            <Layer_in>
                <Send_area>
                    <Gift_at>
                        <Gift_dt>
                            <h2>{streaming.userNickname}님의 스트리밍 정보입니다.</h2>
                            <br/><br/>

                            <h3>광고채널 URL</h3>
                            <Gift_strong >{streaming.publishUrlWithAd}</Gift_strong>
                            <button onClick={() => handleCopyText(0)}>복사</button>
                            <br/><br/>

                            <h3>광고채널 streamKey</h3>
                            <Gift_strong>{streaming.streamKeyWithAd}</Gift_strong>
                            <button onClick={() => handleCopyText(1)}>복사</button>
                            <br/><br/>
                            
                            <h3>광고제거 채널 URL</h3>
                            <Gift_strong>{streaming.publishUrlWithOutAd}</Gift_strong>
                            <button onClick={() => handleCopyText(2)}>복사</button>
                            <br/><br/>

                            <h3>광고제거 채널 streamKey</h3>
                            <Gift_strong>{streaming.streamKeyWithOutAd}</Gift_strong>
                            <button onClick={() => handleCopyText(3)}>복사</button>
                            <br/><br/>
                        </Gift_dt>
                    </Gift_at>
                    <Button_area>
                        <Button_cancle_button ref={cancleRef} onClick={onClickCancle}>확인</Button_cancle_button>
                    </Button_area>
                </Send_area>
            </Layer_in>
        </Modal>
    </Outline_area_2> 
    )
}

export default streamingInfoModal;