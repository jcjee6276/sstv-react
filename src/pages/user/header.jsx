/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useCallback } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { CHeader, CHeader_Dark, Com_h1, HeaderDiv, Header_Modal_Div, 
    Header_Modal_Div_Set, Header_Modal_Label, Header_Modal_Strong_mode, Header_Right_Icon_1_Button, 
    Header_Right_Icon_1_Div, Header_Right_Icon_1_a, Header_Right_Icon_2_Button, 
    Header_Right_Icon_2_Span, Header_Right_Login_Ui_Button, Header_Right_Login_Ui_Div, 
    Header_Right_Login_Ui_Span, Header_Right_Login_Ui_a, Header_Right_Side_Div, 
    Header_Search_Button, Header_Search_Div, Header_Search_Div_input, Header_Search_Div_input_in, 
    Header_Search_Input_in, Header_Search_Side_Button, Header_Search_Side_Span, Header_Search_Span, 
    Header_Search_fieldset, Header_Search_form, Header_a, Header_legend, Header_right_Icon_1_Span } from './headerStyle'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import axios from 'axios';
import LoginModal from '../Mainpage/loginModal';
import { useNavigate } from 'react-router-dom';
import { User_update_subTitle, User_update_title } from './style';

const header = () => {
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const {data} = useSWR('/user/login', fetcher);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    }
    const logout = useCallback(() => {
        axios.get('/user/logout')
        .then(()=>{
            window.location.reload();
        })
    });     
      
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

   

    return (
        
        <CHeader>
            <HeaderDiv >
                <Com_h1 >
                    
                    <Header_a href='/'>
                    <img src={process.env.PUBLIC_URL +'/img/SSTV.gif'} width={150} height={65} />
                    </Header_a>
                </Com_h1>

                <Header_Search_Div>
                    <Header_Search_form>
                        <Header_Search_fieldset>
                            <Header_legend>검색</Header_legend>
                            <Header_Search_Div_input>
                                <Header_Search_Div_input_in>
                                    <Header_Search_Input_in placeholder='방송국 검색'/>
                                    

                                    <Header_Search_Button>
                                        <Header_Search_Span>
                                        
                                        </Header_Search_Span>
                                    </Header_Search_Button>
                                    
                                </Header_Search_Div_input_in>

                                <Header_Search_Side_Button>
                                    <Header_Search_Side_Span>
                                        통합검색
                                    </Header_Search_Side_Span>
                                </Header_Search_Side_Button>

                                

                            </Header_Search_Div_input>
                        </Header_Search_fieldset>

                                
                    </Header_Search_form>
                </Header_Search_Div>

                                 <Header_Right_Side_Div >
                                    <Header_Right_Icon_1_Div>
                                        <Header_Right_Icon_1_a>
                                            <Header_Right_Icon_1_Button>
                                                <Header_right_Icon_1_Span >
                                                    VOD 업로드
                                                </Header_right_Icon_1_Span>
                                            </Header_Right_Icon_1_Button>
                                        </Header_Right_Icon_1_a>
                                    </Header_Right_Icon_1_Div>

                                    <Header_Right_Icon_2_Button>
                                        <Header_Right_Icon_2_Span>

                                        </Header_Right_Icon_2_Span>
                                    </Header_Right_Icon_2_Button>

                                    <Header_Right_Login_Ui_Div>
                                        <Header_Right_Login_Ui_Span>
                                            
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
                                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                                            <MenuItem onClick={handleClose}>My account</MenuItem>
                                            <MenuItem onClick={handleClose}>Logout</MenuItem>
                                        </Menu>
                                        
                                            
                                           {!data ? 
                                            <Header_Right_Login_Ui_a onClick={openModal}>
                                                        로그인
                                            </Header_Right_Login_Ui_a>
                                            :
                                            <Header_Right_Login_Ui_a onClick={logout}>
                                                        로그아웃
                                            </Header_Right_Login_Ui_a>
                                            }
                                            {isOpen && <LoginModal onClose={isOpen} setOnClose={setIsOpen}/>}
                                        </Header_Right_Login_Ui_Span>
                                    </Header_Right_Login_Ui_Div>

                                </Header_Right_Side_Div>
                                </HeaderDiv>
                                <User_update_title style={{marginLeft:'480px'}}>
                                <User_update_subTitle >
                                            개인정보
                                </User_update_subTitle>
                                </User_update_title>
        </CHeader>
       
    )
}

export default header;


  