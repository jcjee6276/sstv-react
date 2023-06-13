/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';

const ReportModal = ({onClose, setOnClose, data}) => {
    const report = data;
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

    const getReportType = (reportCode) => {
        let reportType;
    
        switch (reportCode) {
          case 1:
            reportType = '불법/음란';
            break;
          case 2:
            reportType = '저작권 침해';
            break;
          case 3:
            reportType = '명예훼손';
            break;
          case 4:
            reportType = '청소년 유해';
            break;
          case 5:
            reportType = '기타';
            break;
          default:
            break;
        }
        return reportType;
      }

      const getCategory = (categoryId) => {
        let result;
        switch(categoryId) {
            case 1:
                result = '게임';
                break;
            case 2:
                result = '일상';
                break;
            case 3:
                result = '스포츠';
                break;
            case 4:
                result = '먹방';
                break;
            case 5:
                result = '요리';
                break;
            case 6:
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
                                                            <Modal_title_h4>신고 내역</Modal_title_h4>
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
                                                                        <Modal_body_id_lable>신고회원 ID</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{report.USER_ID}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>피신고회원 ID</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{report.STREAMING_USER_ID}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>신고날짜</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{report.REPORT_DATE}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>신고유형</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{getReportType(report.REPORT_TYPE)}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>신고내용</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{report.REPORT_CONTENT}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>신고 접수된 스트리밍 제목</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{report.STREAMING_TITLE}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 카테고리</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{getCategory(report.STREAMING_CATEGORY)}</Modal_body_id_lable>
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 시작 날짜</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                <Modal_body_id_lable>{report.STREAMING_START_TIME}</Modal_body_id_lable>
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