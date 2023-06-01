/* eslint-disable react-hooks/rules-of-hooks */
import React,{useState, useRef, useEffect, useCallback} from 'react';
import { useNavigate } from 'react-router-dom';
import {Modal_body_help_p, Modal_body_help_a, Modal_body_pw_input_div_3, Modal_body_id_input, Modal_body_id_div_3, Modal_body_id_div_2, Modal_body_id_div, Modal_title_h4, Modal_title_div_3, Modal_area_1_div, Modal_area_div, Modal_area_layout_div, Modal_area_layout_div_2, Modal_area_layout_div_3, Modal_Content_div, Modal_layout_div, Modal_main_div, Modal_overlay_div, Modal_title_div, Modal_title_div_2, Modal_title_figure, Modal_title_write_div, Modal_body_div, Modal_body_form, Modal_body_lay_div, Modal_body_id_div_1, Modal_body_id_lable, Modal_body_id_input_div, Modal_body_id_input_div_2, Modal_body_pw_idv, Modal_body_pw_div_2, Modal_body_pw_div_3, Modal_body_pw_div_4, Modal_body_pw_title_div, Modal_body_pw_title_lable, Modal_body_pw_input_div, Modal_body_pw_input_div_2, Modal_body_pw_input, Modal_body_help_div, Modal_login_submit_div, Modal_login_submit_div_2, Modal_login_submit_div_3, Modal_login_submit_button, Modal_login_submit_button_div, Modal_login_submit_noinput_div, Modal_signup_nav_div, Modal_signup_button, Modal_signup_button_div, Modal_signup_content_div, Modal_login_submit_input_div, Modal_login_submit_input_button_div, Modal_login_submit_input_button, Modal_signup_button_div_over } from './style';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Header from './header';

const startStreamingModal = ({onClose, setOnClose, handleSubmit}) => {
    const navigate = useNavigate();
    const [streamingTitle, setStreamingTitle]= useState('');
    const [streamingCategory, setStreamingCategory] = useState('');
    const [mouseOver, setMouseOver] = useState(false);
    const modalRef = useRef(null);
    const [buttonChange, setButtonChange] = useState(false);

    const {data,revalidate} = useSWR('/user/login', fetcher);

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

    const onChangestreamingTitle = useCallback((event) =>{
        setStreamingTitle(event.target.value);
        
    },[streamingTitle])
    const onChangestreamingCategory = useCallback((event) => {
        setStreamingCategory(event.target.value);
    },[streamingCategory])

    //console.log(data);

    useEffect(()=> {
        if(streamingTitle!=='' && streamingCategory !=='' ) {
            setButtonChange(true);
        }
        if(streamingTitle==='' || streamingCategory==='' ){
            setButtonChange(false);
        }
    })
    
    // const onSubmit = useCallback(async () => {
    //     const response = await axios.create({
    //         baseURL: 'http://localhost:3000',
    //         withCredentials : true
    //     }).post('/streaming/addStreaming', {streamingTitle : streamingTitle, streamingCategory : streamingCategory});
        
    //     const result = (JSON.parse(response.data)).result;
    //     if(result == 'success') {
    //         alert('success!');
    //         navigate('/chat');
    //     }else {
    //         alert('스트리밍 시작에 실패했습니다.');
    //     }
    // });
    
    const handleMouseOver = () => {
        setMouseOver(true);
    }

    const handleMouseLeave = () => {
        setMouseOver(false);
    }

    const handleModalSubmit = () => {
        const data = {
            streamingTitle : streamingTitle,
            streamingCategory : streamingCategory
        }
        handleSubmit(data);
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
                                                            <Modal_title_h4>SSTV에서 스트리밍 시작</Modal_title_h4>
                                                        </Modal_title_write_div>
                                                    </Modal_title_div_3>
                                                </Modal_title_div_2>
                                            </Modal_title_div>


                                            <Modal_body_div>
                                                <Modal_body_form onSubmit={handleModalSubmit}>
                                                    <Modal_body_lay_div >
                                                        <Modal_body_id_div>
                                                            <Modal_body_id_div_1>
                                                                <Modal_body_id_div_2>
                                                                    <Modal_body_id_div_3>
                                                                        <Modal_body_id_lable>스트리밍 제목</Modal_body_id_lable>
                                                                    </Modal_body_id_div_3>
                                                                </Modal_body_id_div_2>

                                                                <Modal_body_id_input_div>
                                                                    <Modal_body_id_input_div_2>
                                                                        <Modal_body_id_input value={streamingTitle} onChange={onChangestreamingTitle}></Modal_body_id_input>
                                                                    </Modal_body_id_input_div_2>
                                                                </Modal_body_id_input_div>

                                                            </Modal_body_id_div_1>
                                                        </Modal_body_id_div>

                                                        <Modal_body_pw_idv>
                                                            <Modal_body_pw_div_2>
                                                                <Modal_body_pw_div_3>
                                                                    <Modal_body_pw_div_4>
                                                                        <Modal_body_pw_title_div>
                                                                            <Modal_body_pw_title_lable>스트리밍 카테고리</Modal_body_pw_title_lable>
                                                                        </Modal_body_pw_title_div>
                                                                    </Modal_body_pw_div_4>

                                                                    <Modal_body_pw_input_div>
                                                                        <Modal_body_pw_input_div_2>
                                                                            <Modal_body_pw_input_div_3>
                                                                                <Modal_body_pw_input onChange={onChangestreamingCategory} id='streamingCategory' type='streamingCategory' ></Modal_body_pw_input>
                                                                            </Modal_body_pw_input_div_3>
                                                                        </Modal_body_pw_input_div_2>
                                                                    </Modal_body_pw_input_div>

                                                                </Modal_body_pw_div_3>
                                                            </Modal_body_pw_div_2>
                                                        </Modal_body_pw_idv>

                                                        <Modal_login_submit_div>
                                                            <Modal_login_submit_div_2>
                                                                <Modal_login_submit_div_3></Modal_login_submit_div_3>
                                                                
                                                                {buttonChange ===false ? 
                                                                    <Modal_login_submit_button disabled>
                                                                        <Modal_login_submit_button_div >
                                                                            <Modal_login_submit_noinput_div>스트리밍 시작!</Modal_login_submit_noinput_div>
                                                                        </Modal_login_submit_button_div>
                                                                    </Modal_login_submit_button> 
                                                                :
                                                                     <Modal_login_submit_input_button>
                                                                            <Modal_login_submit_input_button_div>
                                                                                 <Modal_login_submit_input_div>스트리밍 시작!</Modal_login_submit_input_div>
                                                                            </Modal_login_submit_input_button_div>
                                                                     </Modal_login_submit_input_button>  
                                                                        } 
                                                            </Modal_login_submit_div_2>
                                                        </Modal_login_submit_div>

                                                        <Modal_signup_nav_div>
                                                            <Modal_signup_button>
                                                                <Modal_signup_button_div onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
                                                                    {mouseOver === false? 
                                                                    <Modal_signup_content_div>적당한걸로 바꾸자</Modal_signup_content_div>
                                                                    :
                                                                    <Modal_signup_button_div_over>적당한걸로 바꾸자</Modal_signup_button_div_over>
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

export default startStreamingModal;