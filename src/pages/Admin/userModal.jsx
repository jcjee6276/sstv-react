/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserXmark } from '@fortawesome/free-solid-svg-icons';
import {Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable} from '../Mainpage/style';

const ReportModal = ({onClose, setOnClose, data, onClick}) => {
    const user = data;
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

    const handleOnClick = () => {
        onClick();
    }
    
    const getStRoll = (stRoll) => {
        if(stRoll == 0) {
            return '가능';
        }else {
            return '정지';
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
                                                            <Modal_title_h4>회원 상세정보</Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form>
                                                    <Modal_body_lay_div >
                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>회원 이름</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{user.USER_NAME}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>회원 ID</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{user.USER_ID}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>회원 닉네임</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{user.USER_NICKNAME}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>생년월일</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{user.DATE_BIRTH}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>이메일</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{user.EMAIL}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>전화번호</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{user.PHONE}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>가입일자</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{user.SIGN_DATE}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>보유 코인</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{user.COIN}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>방송시간</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{user.TOTAL_STREAMING_ACCUMULATED_TIME}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>누적시청자수</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{user.ACCUMULATED_VIEWERS}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 권한</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable onClick = {handleOnClick}>
                                                                {user.ST_ROLL === 0 ? (
                                                                <>
                                                                    {getStRoll(user.ST_ROLL)}
                                                                    <pre>권한 정지하기 <FontAwesomeIcon icon={faUserXmark} className="fa-2x" /></pre>
                                                                </>
                                                                ) : (
                                                                getStRoll(user.ST_ROLL)
                                                                )}

                                                                </Modal_body_id_lable>
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

export default ReportModal;