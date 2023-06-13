/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from './style';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Header from './header';

const loginModal = ({onClose, setOnClose}) => {
    const [userId, setUserId]= useState('');
    const [password, setPassword] = useState('');
    const [mouseOver, setMouseOver] = useState(false);
    const modalRef = useRef(null);
    const [buttonChange, setButtonChange] = useState(false);
    const [findId, setFindId] = useState(false);
    const [findPasswd, setFindPasswd] = useState(false);
    const {data,revalidate} = useSWR('/user/login', fetcher);
    const [path, setPath] = useState('');
    const navigate = useNavigate();
    const [addUserOpen, setAddUserOpen] = useState(false);
    const [smsClose, setSmsClose] = useState(false);
    const openAddUser = () => {
        setPath('addUser');
        setAddUserOpen(true);
    }
    const closeAddUser = () => {
        setAddUserOpen(false);
    }
    
    
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

    const onChangeUserId = useCallback((event) =>{
        setUserId(event.target.value);
        
    },[userId])
    const onChangePassword = useCallback((event) => {
        setPassword(event.target.value);
    },[password])

    //console.log(data);

    useEffect(()=> {
        if(userId!=='' && password !=='' ) {
            setButtonChange(true);
        }
        if(userId==='' || password==='' ){
            setButtonChange(false);
        }
    })
    
    const onSubmit = useCallback(() => {
        axios.post('/user/login',
            {userId, password}
        )
        .then((response)=> {
            console.log(response.data);
            revalidate();
        })
        
    },[userId, password])

    const handleMouseOver = () => {
        setMouseOver(true);
    }

    const handleMouseLeave = () => {
        setMouseOver(false);
    }

     
    //아이디 찾기&비밀번호 찾기 이동창 노출
    const findInfo = () => {
        setFindId(true);
        setPassword(true);
    }

    //아이디 찾기를 위한 휴대폰 인증 화면으로 이동
    const findIdView = () => {
        setPath('findId')
        navigate('/sendSMS/findId');
    }

    //비밀번호 찾기를 위한 휴대폰 인증 화면으로
    const findPasswdView =()=> {
        setPath('findPasswd')
        navigate('/sendSMS/findPasswd');
    }

    //회원가입을 위한 휴대폰 인증화면으로
    const handleClick = () => {
        setPath('addUser')
        navigate('/sendSMS/addUser');
    }

    //네이버 로그인
    const naver_login = () => {
        window.location.href = "https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=oxyovmQ_xk_uAaUdHUKu&redirect_uri=http://223.130.135.131:8080/user/naverLogin&state=access_Token";
        // axios.get('/user/login').then((response)=> {
        //     if (response.data.data !== null) {
        //         window.location.replace ("/"); // 메인 페이지로 이동
        //       } else {
        //         alert('로그인 실패!');
        //       }
        // })

        // axios.get("/authorize?response_type=code&client_id=oxyovmQ_xk_uAaUdHUKu&"+"redirect_uri="+"/user/naverLogin&state=access_Token")
        // .then((response)=> {
        //     if(response.data.data !== null){
        //         console.log('유저 정보 :: '+response.data.data);
        //         navigate('/');
        //     }
        //     if(response.data.data === null){
        //         alert('로그인 실패!');
        //     }
        // })
  }

    //카카오 로그인
    const kakao_login = () => {
        window.location.href = "https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=73b235263e9c55fb4e85a97648c1c0de&redirect_uri=http://223.130.135.131:8080/user/kakaoLogin&prompt=login"
    }



    // if(!data){
    //     return <Header data={data}/>
    // }
    

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
                                                            <Modal_title_h4>SSTV에 로그인</Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form onSubmit={onSubmit}>
                                                    <Modal_body_lay_div >
                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>아이디</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>

                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input value={userId} onChange={onChangeUserId}></Modal_body_id_input>
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>

                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_pw_idv>
                                                            <Modal_body_pw_div_2>
                                                                <Modal_body_pw_div_3>
                                                                    <Modal_body_pw_div_4>
                                                                        <Modal_body_pw_title_div>
                                                                            <Modal_body_pw_title_lable>비밀번호</Modal_body_pw_title_lable>
                                                                        </Modal_body_pw_title_div>
                                                                    </Modal_body_pw_div_4>

                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                                <Modal_body_pw_input onChange={onChangePassword} id='password' type='password' ></Modal_body_pw_input>
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>

                                                                </Modal_body_pw_div_3>

                                                                <Modal_body_help_div>
                                                                    <Modal_body_help_a>
                                                                    {findId === false ? (
                                                                        <Modal_body_help_p onClick={findInfo} style={{cursor:'pointer'}}>로그인이 안 되세요?</Modal_body_help_p>
                                                                         ) : (
                                                                            <>
                                                                              <Modal_body_help_p onClick={findIdView} style={{ float: 'left' , cursor:'pointer' }}>아이디 찾기</Modal_body_help_p>
                                                                              <span style={{ float: 'left', margin: '0 5px' }}>/</span>
                                                                              <Modal_body_help_p onClick={findPasswdView} style={{ float: 'left', cursor:'pointer' }}>비밀번호 찾기</Modal_body_help_p>
                                                                            </>
                                                                          )}
                                                                          <div style={{ clear: 'both' }}></div>
                                                                    </Modal_body_help_a>
                                                                </Modal_body_help_div>

                                                            </Modal_body_pw_div_2>
                                                        </Modal_body_pw_idv>

                                                        <Modal_login_submit_div>
                                                            <Modal_login_submit_div_2>
                                                                <Modal_login_submit_div_3></Modal_login_submit_div_3>
                                                                
                                                                {buttonChange ===false ? 
                                                                    <Modal_login_submit_button disabled>
                                                                        <Modal_login_submit_button_div >
                                                                            <Modal_login_submit_noinput_div>로그인</Modal_login_submit_noinput_div>
                                                                        </Modal_login_submit_button_div>
                                                                    </Modal_login_submit_button> 
                                                                :
                                                                     <Modal_login_submit_input_button>
                                                                            <Modal_login_submit_input_button_div>
                                                                                 <Modal_login_submit_input_div>로그인</Modal_login_submit_input_div>
                                                                            </Modal_login_submit_input_button_div>
                                                                     </Modal_login_submit_input_button>  
                                                                        } 
                                                            </Modal_login_submit_div_2>
                                                        </Modal_login_submit_div>
                                                                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop:'20px' }}>
                                                                        <img src={process.env.REACT_APP_IMAGE_URL+'kakao_login.png'} style={{ width: '220px', height: '50px', cursor:'pointer' }} onClick={kakao_login}/>
                                                                        <img src={process.env.REACT_APP_IMAGE_URL+'naver_login.png'} style={{ width: '220px', height: '50px', cursor:'pointer' }} onClick={naver_login}/>
                                                                        </div>
                                                        <Modal_signup_nav_div>
                                                            <Modal_signup_button>
                                                                <Modal_signup_button_div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                                                                    {mouseOver === false? 
                                                                    <Modal_signup_content_div >계정이 없으신가요? 회원가입</Modal_signup_content_div>
                                                                    :
                                                                    <>
                                                                    <Modal_signup_button_div_over onClick={handleClick}>계정이 없으신가요? 회원가입</Modal_signup_button_div_over>
                                                                    {/* {addUserOpen && <SendSMS smsClose={addUserOpen} setSmsClose={setAddUserOpen}/>} */}
                                                                    </>
                                                                    }
                                                                </Modal_signup_button_div>
                                                            </Modal_signup_button>
                                                        </Modal_signup_nav_div>

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

export default loginModal;