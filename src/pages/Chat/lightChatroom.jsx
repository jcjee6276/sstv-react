/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {Header_Right_Login_Ui_Button, Stream_div, Chat_text_div, Chat_body_container_div, Chat_body_div, Chat_body_line_2_div, Chat_body_line_div, Chat_body_user_div, Chat_frame_div, Chat_Header_button, Chat_Header_button_a, Chat_header_button_button, Chat_Header_button_div, Chat_Header_button_g, Chat_header_button_icon, Chat_header_button_svg, Chat_Header_div, Chat_Header_font_div, Chat_Header_font_span, Chat_Header_font_view_div, Chat_header_trigger_div, Chat_Header_view_div, Chat_main_div, Chat_main_div_2, Chat_main_div_3, Chat_main_frame, Chat_main_iframe, Chat_mouseover_icon, Chat_mouseover_menu_button, Chat_mouseover_menu_div, Chat_mouseover_menu_div_2, Chat_scroll_div, Chat_stream_main_div, Chat_text_area_div, Chat_text_label, Chat_user_chatbox_div, Chat_user_container, Chat_user_content_div, Chat_user_date_div, Chat_user_date_span, Chat_user_img, Chat_user_info_div, Chat_user_info_div2, Chat_user_info_img, Chat_user_info_img_div, Chat_user_info_span, Chat_user_info_top, Chat_user_input_div, Chat_user_input_div_2, Chat_user_nickname_span, Chat_user_output_div, Chat_user_output_div_2, Chat_user_output_div_3, Chat_user_profile_div, Chat_user_text_div, Chat_user_text_span, Chat_user_tipe_div, Chat_user_tipe_div_2, Chat_user_tipe_div_cus, Chat_box_underline_div, Chat_underline_unfocus, Chat_underline_focus, Chat_buttons_div, Chat_manager_div, Chat_manager_div_cus, Chat_manager_div_cus2, Chat_manager_button, Chat_manager_icon, Chat_manager_svg, Chat_submit_div, Chat_submit_text_div, Chat_submit_button_div, Chat_submit_button_div_cus, Chat_submit_icon_a, Chat_submit_icon_cus, Chat_submit_icon_button, Stream_main_div, Stream_second_div, Stream_third_div, Chat_re_body_main, Chat_re_body_mainlist, Chat_re_body_overlay, Chat_re_body_cus, Chat_re_body_scope, Chat_re_body_item_offset, Chat_re_body_items, CS_Main } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faFilm, faFontAwesome, faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import Chatfooter from './chatfooter';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import io from 'socket.io-client'
import Donation from '../Chat/donationEvent'
import axios from 'axios';
import ChatList from './chatList'

const lightChatroom = () => {
    const {data} = useSWR('/user/login', fetcher);
    const [currentMessage, setCurrentMessage] = useState(''); 
    const [messageList, setMessageList] = useState([]);
    const isCanSubmit = !!currentMessage.replace(/ |\n/g, '');
    const chatboxRef = useRef(null);
    const [mouseOver, setMouseOver] = useState(null);
    const socket = io('192.168.0.15:3001');
    const [receivedMessage, setReceiveMessage] = useState(null);
    const [meInput, setMeInput] = useState(false);
    // const [donation, setDonation] = useState(false);
    const [blackList, setBlackList] = useState([]);
    const navigate = useNavigate();
    const streamUserId = 'admin';
    const sessionUser = data?.userId
    const userId = streamUserId;
    const [donationData, setDonationData] = useState();
    const [allDonation, setAllDonation] = useState(null);
    const [socketDonation, setSocketDonation] = useState([]);
    const [reqData, setReqData] = useState('');
    const [openEvent, setOpenEvent] = useState(false);
    const [openList, SetOpenList] = useState(false);
    
    const OpenChatList = ()=> {
        SetOpenList(true);
    }

    useEffect(()=> {
        axios.get('/fan/getBlackList/'+streamUserId)
        .then((response)=> {
            const streamData = response.data;
            const blackList = streamData['data'];
            console.log(streamData['data']);
            setBlackList(blackList);
            console.log("blakck"+blackList[0]);
        })
    },[])
    const addUserToBlackList = (user) => {
        setBlackList((prevBlackList) => [...prevBlackList, user]);
      };
    
    useEffect(() => {
        if (blackList.includes(sessionUser)) {
          alert("blackUser입니다.");
          navigate("/");
        }
      }, [sessionUser, blackList, navigate]);
    
    const inMouseOver =(messageContent, key) => {
        setMouseOver(key);
        console.log("over"+messageContent)
        console.log("key"+key)
    }
    const inMouseLeave =() => {
        setMouseOver(null);
    }
  
    const roomName= {'roomName': 'admin'};
    socket.emit('join_room', roomName);

    const sendMessage= async() => {
        if(isCanSubmit) {
            const messageData = {
                username: data?.userId,
                room: 'admin', // streamerId
                message: currentMessage,
                image: data?.profilePhoto,
                time: 
                new Date(Date.now()).getHours() +
                ":" +
                new Date(Date.now()).getMinutes(),
            };
             await socket.emit('send_message', messageData);
            // setMessageList(emessageList=> [...emessageList, messageData]);
            console.log(messageData);
            setCurrentMessage('');
            setReceiveMessage(null);
            setMeInput(true);
        }
    }
    // useEffect(()=> {
        
        socket.on('receive_message', (data)=>{
            setReceiveMessage(data);

        })

        

        socket.on('receive_donation', ({data,fileUrl, donationMent})=>{
            setSocketDonation(data);
            setDonationData('');
            console.log(data, fileUrl, donationMent);
            return() => socket.off('receive_donation');
        })
    

        
   
    useEffect(()=> {
        if(socketDonation){
            setReqData(socketDonation);
            setSocketDonation('');
            setOpenEvent(true);
            console.log("아무때나?"+socketDonation.USER_ID)
            nullCheck();
        }
    },[socketDonation])
    const nullCheck= () => {
        if(!socketDonation.USER_ID){
            setOpenEvent(false);
        }
    }

    useEffect(()=> {
        if ( receivedMessage){
            setMessageList((emessageList)=>[...emessageList, receivedMessage]);
            setReceiveMessage(null);
            setMeInput(false);
            console.log('dd');
        }
        
    }, [receivedMessage])

    useEffect(()=> {
        if(setOpenEvent){
           const timer = setTimeout(()=> {
                setOpenEvent(false)
            },6000);
            return ()=> clearTimeout(timer);
        }
    },[openEvent])
    // useEffect(()=> {
    socket.emit('send_donation', donationData);
// }, [])
    // useEffect(()=> {
    //     if(donationData){
    //         setSocketDonation(donationData);
    //         setDonationData('');
    //     }
    // })
 
   
   

    useEffect(()=>{
            scrollToBottom();
    },[messageList]);

    

    const scrollToBottom = () => {
        
        if(chatboxRef.current){
            chatboxRef.current.scrollTop = chatboxRef.current.scrollHeight;
            console.log("ff:"+chatboxRef.current.scrollHeight);
            
        }
    }
    

    const handleKeyPress = (event) => {
            if( !event.shiftKey && event.key ==="Enter"){
                event.preventDefault();
                sendMessage();
                scrollToBottom();
            }
    }

    const imageError = (event) => {
        event.target.src = process.env.PUBLIC_URL+'/img/base_profile.jpg';
    }
    
    const image = process.env.PUBLIC_URL+`/img`+data?.profilePhoto;
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [userOpen, setUserOpen] = useState(null);
    const open = Boolean(anchorEl);
    const useOpen = Boolean(userOpen);
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const userClick = (event) => {
        setUserOpen(event.currentTarget);
    }
    const userClose = (e) => {
        setUserOpen(null);
    }

    
    
    

    return(
    <CS_Main>
        <Chat_stream_main_div id="main">
            <Stream_main_div>
                <Stream_second_div>
                    <Stream_third_div>
                        <Stream_div>
                            <video src='./video/test.mp4
                            ' controls/>
                        </Stream_div>
                    </Stream_third_div>
                    <Chatfooter donationData={donationData} setDonationData={setDonationData}/>
                </Stream_second_div>
            </Stream_main_div>

            {openEvent&& <Donation donationData={reqData} />}

            {openList && <ChatList openList={openList} setOpenList={SetOpenList}/>}
            <Chat_main_div>
                <Chat_main_div_2 id="no">
                    <Chat_main_div_3>
                    
                        <Chat_main_frame>
                            {/* <Chat_main_iframe> */}
                            
                                <Chat_frame_div>
                                    <Chat_Header_div id='header'>
                                        <Chat_Header_font_div>
                                            <Chat_Header_font_span>
                                                <Chat_header_trigger_div>
                                                    <Chat_Header_view_div>
                                                        <Chat_Header_font_view_div>실시간 채팅</Chat_Header_font_view_div>
                                                    </Chat_Header_view_div>
                                                </Chat_header_trigger_div>
                                            </Chat_Header_font_span>
                                        </Chat_Header_font_div>

                                    
                                        <Chat_Header_button_div>
                                            <Chat_Header_button_a>
                                                <Chat_Header_button>
                                                    <Chat_header_button_button>
                                                        <Chat_header_button_icon>
                                                                      <Button
                                                                            id="basic-button"
                                                                            aria-controls={open ? 'basic-menu' : undefined}
                                                                            aria-haspopup="true"
                                                                            aria-expanded={open ? 'true' : undefined}
                                                                            onClick={handleClick}
                                                                        >
                                                                        <Header_Right_Login_Ui_Button />
                                                                        </Button>
                                                                        <Menu
                                                                        id="basic-menu"
                                                                        anchorEl={anchorEl}
                                                                        open={open}
                                                                        onClose={handleClose}
                                                                        MenuListProps={{
                                                                        'aria-labelledby': 'basic-button',
                                                                        }}
                                                                    >
                                                                        <MenuItem onClick={OpenChatList}>Profile</MenuItem>
                                                                        <MenuItem onClick={handleClose}>My account</MenuItem>
                                                                        <MenuItem onClick={handleClose}>Logout</MenuItem>
                                                                        
                                                                    </Menu>
                                                        </Chat_header_button_icon>
                                                        
                                                    </Chat_header_button_button>
                                                    
                                                </Chat_Header_button>
                                            </Chat_Header_button_a>
                                        </Chat_Header_button_div>
                                        
                                    </Chat_Header_div>
                                    
                                    

                                    <Chat_body_user_div>
                                        <Chat_user_tipe_div>
                                            <Chat_user_tipe_div_2>
                                                <Chat_user_tipe_div_cus>
                                                    <Chat_user_content_div id='content'>
                                                        

                                                        <Chat_re_body_main id="chat">
                                                            <Chat_re_body_mainlist>
                                                                
                                                                <Chat_re_body_cus>
                                                                    <Chat_re_body_scope>
                                                                       <Chat_scroll_div id='chatbox' ref={chatboxRef} >
                                                                        {/* <Chat_re_body_item_offset>
                                                                            <Chat_re_body_items>
                                                                                
                                                                            </Chat_re_body_items>
                                                                        </Chat_re_body_item_offset> */}
                                                                        

                                                            {messageList.map((messageContent, key)=> {
                                                                
                                                                return(
                                                                    <Chat_user_chatbox_div key={key} onMouseOver={()=>inMouseOver(messageContent, key)} onMouseLeave={()=>inMouseLeave()}> 
                                                                    {mouseOver===key && <Chat_mouseover_menu_div>
                                                                        <Chat_mouseover_menu_div_2>
                                                                            <Chat_mouseover_menu_button>
                                                                                <Chat_mouseover_icon>
                                                                                                    
                                                                                            <Button
                                                                                        id="basic-button"
                                                                                        aria-controls={useOpen ? 'basic-menu' : undefined}
                                                                                        aria-haspopup="true"
                                                                                        aria-expanded={useOpen ? 'true' : undefined}
                                                                                        onClick={userClick}
                                                                                    >
                                                                                    <Header_Right_Login_Ui_Button />
                                                                                    </Button>
                                                                                    <Menu
                                                                                    id="basic-menu"
                                                                                    anchorEl={userOpen}
                                                                                    open={useOpen}
                                                                                    onClose={userClose}
                                                                                    MenuListProps={{
                                                                                    'aria-labelledby': 'basic-button',
                                                                                    }}
                                                                                >
                                                                                    <MenuItem onClick={userClose}>매니저 위임</MenuItem>
                                                                                    <MenuItem onClick={()=>{console.log("강퇴유저 아이디:"+messageContent.username)
                                                                                        const blackUser = messageContent.username;
                                                                                         axios.post('/fan/addBlacklist', 
                                                                                         {userId, blackUser}
                                                                                         ).then(()=>addUserToBlackList(blackUser))
                                                                                    }}>강제퇴장</MenuItem>
                                                                                </Menu>

                                                                                </Chat_mouseover_icon>
                                                                            </Chat_mouseover_menu_button>
                                                                        </Chat_mouseover_menu_div_2>
                                                                    </Chat_mouseover_menu_div>}
                                                                    <Chat_user_profile_div>
                                                                        <Chat_user_img src={process.env.PUBLIC_URL+'/img/'+messageContent.image} onError={imageError}/>
                                                                    </Chat_user_profile_div>
                                                                    <Chat_user_date_div >
                                                                        <Chat_user_date_span >{messageContent.time}</Chat_user_date_span>
                                                                        <Chat_user_text_div>
                                                                            <Chat_user_nickname_span>{messageContent.username}</Chat_user_nickname_span>
                                                                        </Chat_user_text_div>
                                                                         <Chat_user_text_span >{messageContent.message}</Chat_user_text_span> 
                                                                    </Chat_user_date_div>
                                                                    
                                                                
                                                                    </Chat_user_chatbox_div>
                                                                    
                                                                )
                                                            })
                                                            
                                                            }
                                                                        
                                                                        
                                                                    
                                                                    


                                                                </Chat_scroll_div>

                                                                    </Chat_re_body_scope>
                                                                </Chat_re_body_cus>

                                                                <Chat_re_body_overlay/>
                                                            </Chat_re_body_mainlist>
                                                        </Chat_re_body_main>

                                                        
                                                        <Chat_user_output_div>
                                                            <Chat_user_output_div_2>
                                                                <Chat_user_output_div_3>
                                                                    <Chat_user_container>
                                                                        {data?.userId === undefined? 
                                                                        <Chat_text_div placeholder='로그인을 해주세요.' disabled/>
                                                                        :
                                                                        <Chat_user_info_top id='top'>
                                                                            <Chat_user_info_img_div>
                                                                                <Chat_user_info_img src={image} onError={imageError}/>
                                                                            </Chat_user_info_img_div>
                                                                            <Chat_user_info_div>
                                                                                <Chat_user_info_div2>
                                                                                    <Chat_user_info_span>{data?.userId}</Chat_user_info_span>
                                                                                </Chat_user_info_div2>
                                                                                <Chat_text_area_div>
                                                                                    <Chat_text_label htmlfor="message">
                                                                                       
                                                                                    </Chat_text_label>
                                                                                    <Chat_text_div value={currentMessage} id='message' placeholder='메세지를 입력하세요...' onKeyDown={(event)=> {
                                                                                        if(event.key === 'Enter'){
                                                                                            return false;
                                                                                        }
                                                                                    }}
                                                                                    onChange={(event)=> {
                                                                                        setCurrentMessage(event.target.value);
                                                                                    }}

                                                                                    onKeyPress={handleKeyPress}
                                                                                    >
                                                                                    </Chat_text_div>

                                                                                    <Chat_box_underline_div>
                                                                                        <Chat_underline_unfocus/>
                                                                                        {/* <Chat_underline_focus/> */}
                                                                                    </Chat_box_underline_div>

                                                                                </Chat_text_area_div>
                                                                            </Chat_user_info_div>
                                                                        </Chat_user_info_top> }

                                                                        <Chat_buttons_div>
                                                                            <Chat_manager_div>
                                                                                <Chat_manager_div_cus>
                                                                                    <Chat_manager_div_cus2>
                                                                                        <Chat_manager_button>
                                                                                            <Chat_manager_icon>
                                                                                                <Chat_manager_svg>
                                                                                                <FontAwesomeIcon icon={faUserSecret} />
                                                                                                </Chat_manager_svg>
                                                                                            </Chat_manager_icon>
                                                                                        </Chat_manager_button>
                                                                                    </Chat_manager_div_cus2>
                                                                                </Chat_manager_div_cus>
                                                                            </Chat_manager_div>

                                                                            <Chat_submit_div>
                                                                                <Chat_submit_text_div>보내기</Chat_submit_text_div>
                                                                                <Chat_submit_button_div>
                                                                                    <Chat_submit_button_div_cus>
                                                                                        <Chat_submit_icon_a>
                                                                                            <Chat_submit_icon_cus>
                                                                                                <Chat_submit_icon_button>
                                                                                                    <FontAwesomeIcon icon={faPaperPlane} />
                                                                                                </Chat_submit_icon_button>
                                                                                            </Chat_submit_icon_cus>
                                                                                        </Chat_submit_icon_a>
                                                                                    </Chat_submit_button_div_cus>
                                                                                </Chat_submit_button_div>
                                                                            </Chat_submit_div>

                                                                        </Chat_buttons_div>

                                                                    </Chat_user_container>
                                                                </Chat_user_output_div_3>
                                                            </Chat_user_output_div_2>
                                                        </Chat_user_output_div>

                                                    </Chat_user_content_div>
                                                </Chat_user_tipe_div_cus>
                                            </Chat_user_tipe_div_2>
                                        </Chat_user_tipe_div>
                                    </Chat_body_user_div>

                                </Chat_frame_div>
                            {/* </Chat_main_iframe> */}
                        </Chat_main_frame>
                    </Chat_main_div_3>
                </Chat_main_div_2>
            </Chat_main_div>
            
         </Chat_stream_main_div>
         
         </CS_Main>
    )
}

export default lightChatroom;