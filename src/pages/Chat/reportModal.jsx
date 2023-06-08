/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Report_select, Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';

const reportModal = ({onClose, setOnClose, data, onSubmit}) => {
    const streaming = data;
    const [reportType, setReportType] = useState(1);
    const [reportContent, setReportContent] = useState('');
    const modalRef = useRef(null);
    const cancleRef = useRef(null);

    const handleReportTypeOnChange = (event) => {
        setReportType(event.target.value);
    }

    const handleReportContentOnChange = (event) => {
        setReportContent(event.target.value);
    }

    const handleOnSubmit = () => {
        const data = {
            reportType : reportType,
            reportContent : reportContent
        };
        onSubmit(data);
    }

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

    return (
         
    <Outline_area_2>
        <Modal id='modalArea' ref={modalRef}>
            <Layer_in>
                <Send_area>
                    <Gift_at>
                        <Gift_dt>
                            <h2>신고하기</h2>
                        </Gift_dt>
                        <Report_select value={reportType} onChange={handleReportTypeOnChange}>
                            <option value='1'>불법/음란</option>
                            <option value='2'>저작권 침해</option>
                            <option value='3'>명예훼손</option>
                            <option value='4'>청소년 유해</option>
                            <option value='5'>기타</option>
                        </Report_select>
                    </Gift_at>
                    <Gift_input>
                        <Gift_input_h3>신고 내용</Gift_input_h3>
                        <Gift_input_span >
                            <Gift_void_text value={reportContent} onChange={handleReportContentOnChange} placeholder='신고 상세내용을 입력해주세요.'></Gift_void_text>
                        </Gift_input_span>
                    </Gift_input>

                    <Button_area>
                        <Button_gift_button onClick={handleOnSubmit}>신고하기</Button_gift_button>
                        <Button_cancle_button ref={cancleRef} onClick={onClickCancle}>취소</Button_cancle_button>
                    </Button_area>
                </Send_area>
            </Layer_in>
        </Modal>
    </Outline_area_2> 
        
    )
}

export default reportModal;