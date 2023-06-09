/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';
import ReactPlayer from 'react-player';

const AdModal = ({onClose, setOnClose, data, onClick}) => {
    const streaming = data;
    const [mouseOver, setMouseOver] = useState(false);
    const modalRef = useRef(null);
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

    const getCategory = (categoryId) => {
        let result;
        switch(categoryId) {
            case '0':
                result = '게임';
                break;
            case '1':
                result = '일상';
                break;
            case '2':
                result = '스포츠';
                break;
            case '3':
                result = '먹방';
                break;
            case '4':
                result = '요리';
                break;
            case '5':
                result = '교육';
                break;
            default:
                break;
        }
        return result;
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
                                                            <Modal_title_h4>{`${streaming.userNickname} 님의 스트리밍입니다.`}</Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form>
                                                    <Modal_body_lay_div >
                                                        <Modal_body_pw_idv>
                                                            <Modal_body_pw_div_2>
                                                                <Modal_body_pw_div_3>
                                                                    <Modal_body_pw_div_4>
                                                                        <Modal_body_pw_title_div>
                                                                            <Modal_body_pw_title_lable>
                                                                                <ReactPlayer
                                                                                    url={streaming.serviceUrlWithOutAd}
                                                                                    controls
                                                                                    width="460px"
                                                                                    height="360px"
                                                                                />
                                                                            </Modal_body_pw_title_lable>
                                                                        </Modal_body_pw_title_div>
                                                                    </Modal_body_pw_div_4>
                                                                </Modal_body_pw_div_3>
                                                            </Modal_body_pw_div_2>
                                                        </Modal_body_pw_idv>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 제목</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{streaming.streamingTitle}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 카테고리</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{getCategory(streaming.streamingCategory)}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 실시간 시청자수</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{streaming.streamingViewer}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 시작시간</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{streaming.streamingStartTime}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>후원받은 금액</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{streaming.totalDonationAmount}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>


                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 정지</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable onClick = {onClick}><FontAwesomeIcon icon={faUserXmark} className="fa-2x" /></Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

    
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

export default AdModal;