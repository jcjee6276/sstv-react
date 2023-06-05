/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from '../Mainpage/style';
import axios from 'axios';

const sendSMS = ({onClose, setOnClose}) => {
    const [mouseOver, setMouseOver] = useState(false);
    const modalRef = useRef(null);
    const [buttonChange, setButtonChange] = useState(false);
    const [phone, setPhone] = useState('');
    const [phoneCheck, setPhoneCheck] = useState(false);
    const [code, setCode] = useState('');
    const [codeCheck, setCodeCheck] = useState('');
    const [sendSMS, setSendSMS] = useState('');
    const [success, setSuccess] = useState('');
    const [codeButton, setCodeButton] = useState(false);
    const navigate = useNavigate();

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

    useEffect(()=> {
        if(phone !=='' && phoneCheck === true){
            setButtonChange(true);
        }
        if(phone ==='' || phoneCheck === false){
            setButtonChange(false);
        }
        if(code !=='' && codeCheck ===true){
            setCodeButton(true);
        }
        if(code ==='' || codeCheck ===false){
            setCodeButton(false);
        }

    })
    //휴대폰 유효성 체크
    const handelPhoneCheck = (e) => {
        const inputPhone = e.target.value;
        setPhone(e.target.value);
        const phonePattern = inputPhone.replace(/\D/g, '');

        console.log('입력 받은 값 :: '+inputPhone);
        console.log('유효한 패턴 :: '+phonePattern);

        if(phonePattern === inputPhone) {
          //숫자만 입력 받은 경우
          setPhoneCheck(true);
        }else{
          //유효하지 않은 입력
          setPhoneCheck(false);
        }

      };
      //인증번호 유효성 체크
      const handelCodeCheck = (e) => {
        const inputCode = e.target.value;
        setCode(e.target.value);
        const codePattern = inputCode.replace(/\D/g, '');

        console.log('입력 받은 값 :: '+inputCode);
        console.log('유효한 패턴 :: '+codePattern);

        if(codePattern === inputCode) {
          //숫자만 입력 받은 경우
          setCodeCheck(true);
        }else{
          //유효하지 않은 입력
          setCodeCheck(false);
        }

      };

    // const onSubmit = useCallback((e) => {
    //     e.preventDefault();
    //     axios.post('/user/sendSMS',
    //         {phone}
    //     )
    //     .then((response)=> {
    //         console.log(response.data);
    //         setSendSMS(true);
    //     })
    // },[phone])
    const sendMessage = useCallback(() => {
        axios.post('/user/sendSMS',{phone}).then((response)=>{
            setSendSMS(response.data.result);
        })
    });
    const checkCode = useCallback(()=>{
        axios.post('/user/phoneCheck',{code}).then((response)=>{
            setSuccess(response.data.data);
            alert('인증 성공 여부 ..? :: '+response.data.data)
            if(response.data.data==='success'){
                navigate('/addUser');
            }
            if(response.data.data==='fail'){
                alert('인증번호 오류!')
            }
        })
    });

    console.log('문자 발송 여부 :: '+sendSMS);
    console.log('인증 완료 여부 :: '+success);

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
                                                        <Modal_title_figure><img src={ process.env.PUBLIC_URL+'/img/SSTV_mini.gif'}/></Modal_title_figure>
                                                        <Modal_title_write_div>
                                                            <Modal_title_h4>휴대폰 인증</Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form>
                                                    <Modal_body_lay_div >
                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                            {sendSMS !== 'success' ? (
                                                                <>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>휴대폰 번호</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>
                                                                {phone ==='' ? (
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input placeholder="'-'를 제외한 숫자만 입력해주세요." value={phone} onChange={handelPhoneCheck}></Modal_body_id_input>
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                                ) : (
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input placeholder="'-'를 제외한 숫자만 입력해주세요." value={phone} onChange={handelPhoneCheck}></Modal_body_id_input>
                                                                        {phoneCheck === true ? '':<p style={{ color: 'red' }}>숫자만 입력해주세요.</p>}
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                                )}
                                                                </>
                                                             ) : (
                                                                <>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>인증 번호</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>

                                                                {code ==='' ? (
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input placeholder="인증번호를 입력해주세요." value={code} onChange={handelCodeCheck}></Modal_body_id_input>
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                                ) : (
                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input placeholder="인증번호를 입력해주세요." value={code} onChange={handelCodeCheck}></Modal_body_id_input>
                                                                        {codeCheck === true ? '':<p style={{ color: 'red' }}>숫자만 입력해주세요.</p>}
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>
                                                                )}
                                                                </>
                                                            )}
                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_login_submit_div>
                                                            <Modal_login_submit_div_2>
                                                                <Modal_login_submit_div_3></Modal_login_submit_div_3>
                                                                {!sendSMS ? (
                                                                <>
                                                                {buttonChange ===false ? (
                                                                    
                                                                        <Modal_login_submit_button_div disabled>
                                                                            <Modal_login_submit_noinput_div>문자 발송</Modal_login_submit_noinput_div>
                                                                        </Modal_login_submit_button_div>
                                                                    
                                                                ) : (
                                                                     
                                                                            <Modal_login_submit_input_button_div>
                                                                                 <Modal_login_submit_input_div onClick={sendMessage}>문자 발송</Modal_login_submit_input_div>
                                                                            </Modal_login_submit_input_button_div>
                                                                      
                                                                )}
                                                                </>
                                                                ):(
                                                                <>
                                                                {codeButton ===false ? (
                                                                    
                                                                        <Modal_login_submit_button_div disabled>
                                                                            <Modal_login_submit_noinput_div>인증하기</Modal_login_submit_noinput_div>
                                                                        </Modal_login_submit_button_div>
                                                                    
                                                                ) : (
                                                                     
                                                                            <Modal_login_submit_input_button_div>
                                                                                 <Modal_login_submit_input_div onClick={checkCode}>인증하기</Modal_login_submit_input_div>
                                                                            </Modal_login_submit_input_button_div>
                                                                      
                                                                )}
                                                                </>
                                                                )}
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

export default sendSMS;