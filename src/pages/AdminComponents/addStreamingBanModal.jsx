/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect} from 'react';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';

const addStreamingBanModal = ({onClose, setOnClose, data, onSubmit}) => {
    const streaming = data;
    const [banType, setBanType] = useState(1);
    const [banContent, setBanContent] = useState('');

    const modalRef = useRef(null);
    const [mouseOver, setMouseOver] = useState(false);
    const [buttonChange, setButtonChange] = useState(false);

    useEffect(() => {
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
        
    const handleMouseOver = () => {
        setMouseOver(true);
    }

    const handleMouseLeave = () => {
        setMouseOver(false);
    }    

    const handleBanTypeChange = (event) => {
        setBanType(event.target.value)
    }

    const handleBanContentChange = (event) => {
        setBanContent(event.target.value);
    }

    const handleOnSubmit = (event) => {
        event.preventDefault();
        if(banContent.length > 0) {
            onSubmit({
                banContent : banContent, 
                banType : banType, 
                streamingUserId : streaming.userId
            });    
        }else {
            alert('정지 내용을 입력해주세요');
        }
    }

    return(
        <Modal_main_div >
            <Modal_overlay_div >
                <Modal_Content_div >
                    <Modal_layout_div  >
                        <Modal_area_div id='modalArea' ref={modalRef} >
                            <Modal_area_layout_div >
                                <Modal_area_layout_div_2 >
                                    <Modal_area_layout_div_3 >
                                        <Modal_area_1_div >
                                            <Modal_title_div>
                                                <Modal_title_div_2>
                                                    <Modal_title_div_3>
                                                        <Modal_title_write_div>
                                                            <Modal_title_h4>{streaming.streamingTitle} 스트리밍 정지</Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form onSubmit={handleOnSubmit}>
                                                    <Modal_body_lay_div >

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>정지 유형</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>

                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                    <select onChange={handleBanTypeChange}>
                                                                        <option value="1">불법/음란</option>
                                                                        <option value="2">저작권침해</option>
                                                                        <option value="3">명예훼손</option>
                                                                        <option value="4">청소년 유해</option>
                                                                        <option value="5">기타</option>  
                                                                    </select>
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_pw_idv>
                                                            <Modal_body_pw_div_2>
                                                                <Modal_body_pw_div_3>
                                                                    <Modal_body_pw_div_4>
                                                                        <Modal_body_pw_title_div>
                                                                            <Modal_body_pw_title_lable>정지 내용</Modal_body_pw_title_lable>
                                                                        </Modal_body_pw_title_div>
                                                                    </Modal_body_pw_div_4>

                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                            <textarea onChange={handleBanContentChange} rows="4" cols="50"></textarea>
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>

                                                                </Modal_body_pw_div_3>
                                                            </Modal_body_pw_div_2>
                                                        </Modal_body_pw_idv>

                                                        <Modal_login_submit_div>
                                                            <Modal_login_submit_div_2>
                                                                <Modal_login_submit_div_3></Modal_login_submit_div_3>
                                                                     <Modal_login_submit_input_button>
                                                                            <Modal_login_submit_input_button_div>
                                                                                 <Modal_login_submit_input_div>스트리밍 정지</Modal_login_submit_input_div>
                                                                            </Modal_login_submit_input_button_div>
                                                                     </Modal_login_submit_input_button>  
                                                            </Modal_login_submit_div_2>
                                                        </Modal_login_submit_div>
                                                    </Modal_body_lay_div>
                                                </Modal_body_form>
                                            </Modal_body_div>


                                        </Modal_area_1_div>
                                    </Modal_area_layout_div_3>
                                </Modal_area_layout_div_2>
                            </Modal_area_layout_div>
                        </Modal_area_div>
                    </Modal_layout_div>
                </Modal_Content_div>
            </Modal_overlay_div>
        </Modal_main_div>
    )

}

export default addStreamingBanModal;