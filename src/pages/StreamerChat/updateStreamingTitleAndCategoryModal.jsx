/* eslint-disable no-restricted-globals */
/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect, useRef, useState} from 'react';
import {Gift_input_span,Gift_input, ST_dd,Gift_st, Gift_dd, Gift_at, Gift_dt, Gift_strong, Layer_in, Modal, Send_area, Gift_dd_span, Gift_dd_input, Gift_dd_count_span, Gift_dd_button, ST_dt, ST_dd_span, ST_dd_error, ST_dd_em, ST_dd_error_span, Btn_buy, Gift_input_h3, Gift_void_text, Button_area, Button_gift_button, Button_cancle_button, Outline_area, Outline_area_2} from './donationStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faCircleExclamation, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
const finishStreamingModal = ({onClose, setOnClose, onClick, onSubmit}) => {
    const modalRef = useRef(null);
    const cancleRef = useRef(null);
    const [streamingTitle, setStreamingTitle] = useState('');
    const [streamingCategory, setStreamingCategory] = useState('0');
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

    const handleStreaming = (event) => {
        setStreamingTitle(event.target.value);
    }

    const handleCategory = (event) => {
        setStreamingCategory(event.target.value);
    }

    const handleOnSubmit = () => {
        const data = {
            streamingTitle : streamingTitle,
            streamingCategory : streamingCategory
        }

        onSubmit(data);
    }
    
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
                            <Gift_strong>변경 할 제목을 입력해주세요</Gift_strong>
                        </Gift_dt>
                        <Gift_dd>
                            <Gift_dd_input value={streamingTitle} onChange={handleStreaming} ></Gift_dd_input>
                        </Gift_dd>
                    </Gift_at>
                    <br/><br/>
                    <Gift_dt>
                    <Gift_strong>카테고리를 선택해주세요</Gift_strong>
                    </Gift_dt>
                    <select
                        style={{
                            background: 'white',
                            border: '1px solid #ccc',
                            borderRadius: '4px',
                            padding: '8px',
                            color: '#333',
                            fontSize: '14px',
                            outline: 'none',
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                        }}
                        value={streamingCategory}
                        onChange={handleCategory}
                        >
                        <option value='0'>게임</option>
                        <option value='1'>일상</option>
                        <option value='2'>스포츠</option>
                        <option value='3'>먹방</option>
                        <option value='4'>요리</option>
                        <option value='5'>교육</option>
                    </select>

                    <Gift_st>
                        {streamingTitle.length <= 0 ? 
                        <ST_dd_error>
                            <ST_dd_em><FontAwesomeIcon icon={faCircleExclamation} style={{color: "#e21818",}} /></ST_dd_em>
                            <ST_dd_error_span>제목을 입력해주세요.</ST_dd_error_span>
                        </ST_dd_error>
                        :
                        <Button_area>
                            <Button_gift_button onClick = {() => handleOnSubmit()}>변경하기</Button_gift_button>
                        </Button_area>
                        }
                    </Gift_st>

                    
                </Send_area>
            </Layer_in>
        </Modal>
    </Outline_area_2> 
        
    )
}

export default finishStreamingModal;