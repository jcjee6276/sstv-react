/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import Modal from 'react-modal';
import ReactDOM from 'react-dom';
import { CHeader, CHeader_Dark, Com_h1, HeaderDiv, Header_Modal_Div, 
    Header_Modal_Div_Set, Header_Modal_Label, Header_Modal_Strong_mode, Header_Right_Icon_1_Button, 
    Header_Right_Icon_1_Div, Header_Right_Icon_1_a, Header_Right_Icon_2_Button, 
    Header_Right_Icon_2_Span, Header_Right_Login_Ui_Button, Header_Right_Login_Ui_Div, 
    Header_Right_Login_Ui_Span, Header_Right_Login_Ui_a, Header_Right_Side_Div, 
    Header_Search_Button, Header_Search_Div, Header_Search_Div_input, Header_Search_Div_input_in, 
    Header_Search_Input_in, Header_Search_Side_Button, Header_Search_Side_Span, Header_Search_Span, 
    Header_Search_fieldset, Header_Search_form, Header_a, Header_legend, Header_right_Icon_1_Span } from './style'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';



const header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    }

    const toggleMode = () => {
        setIsDarkMode(!isDarkMode);
        console.log(isDarkMode);
    }


    
   
      
      
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    //   const ModalComponent: React.FC<ModalProps> = ({ isOpen, onClose }) => {
    //     return (
    //       <Modal isOpen={isOpen} onRequestClose={onClose}>
    //         {/* 모달 내용 */}
    //         <Header_Modal_Div>
    //             <Header_Modal_Div_Set>
    //                 <Header_Modal_Strong_mode>
    //                     다크모드
    //                 </Header_Modal_Strong_mode>
    //                 <Header_Modal_Label>

    //                 </Header_Modal_Label>
    //             </Header_Modal_Div_Set>
    //         </Header_Modal_Div>
    //       </Modal>
    //     );
    //   };
   

    return (
        
        <CHeader>
            <HeaderDiv >
                <Com_h1 >
                    
                    <Header_a >
                    <img src="./img/SSTV.gif" width={150} height={65} />
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
                                        <FontAwesomeIcon icon={faSearch} />
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
                                        

                                            {/* <Modal isOpen={isOpen} onRequestClose={closeModal} portalClassName='modal-portal'>
                                            <Header_Modal_Div>
                                                <Header_Modal_Div_Set>
                                                    <Header_Modal_Strong_mode>
                                                       다크모드
                                                 </Header_Modal_Strong_mode>
                                                  <Header_Modal_Label>

                                                    </Header_Modal_Label>
                                                </Header_Modal_Div_Set>
                                             </Header_Modal_Div> 


                                            </Modal> */}
                                            
                                            
                                            
                                            <Header_Right_Login_Ui_a onClick={toggleMode}>
                                                        로그인
                                            </Header_Right_Login_Ui_a>
                                        </Header_Right_Login_Ui_Span>
                                    </Header_Right_Login_Ui_Div>

                                </Header_Right_Side_Div>

            </HeaderDiv>
        </CHeader>
       
    )
}

export default header;


  