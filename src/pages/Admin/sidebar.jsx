/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Sidebar_Article_Class, Sidebar_Div, Sidebar_Div_in,  Sidebar_Section_Class, Sidebar_User_a, Sidebar_User_info, Sidebar_User_name_h2, Sidebar_User_name_idv, Sidebar_a_in_div, Sidebar_Writing_Button, Sidebar_Writing_Span, Sidebar_footer_article, Sidebar_footer_VOD_div, Sidebar_footer_VOD_h3, Sidebar_footer_VOD_button, Sidebar_footer_VOD_span, Sidebar_footer_VOD_li_ul, Sidebar_footer_VOD_li_1, Sidebar_footer_VOD_1_a, Sidebar_footer_Writing_div, Sidebar_footer_Writing_h3, Sidebar_footer_Writing_button, Sidebar_footer_Writing_span, Sidebar_footer_Writing_li_1, Sidebar_footer_Writing_1_a, Sidebar_footer_Writing_strong, Sidebar_footer_Writing_ul_a } from '../Community/style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const sidebar = () => {
    const navigate = useNavigate();
    
    const imageError = (event) => {
        event.target.src = process.env.PUBLIC_URL+'/img/base_profile.jpg';
    }
    
    // const image = process.env.PUBLIC_URL+'/img/'+userImage;

    return(
        
        
    <Sidebar_Div>
        <Sidebar_Div_in>
            <Sidebar_Article_Class>
                <Sidebar_Section_Class>
                    <Sidebar_User_a>
                        <Sidebar_a_in_div >
                        </Sidebar_a_in_div>
                    </Sidebar_User_a>

                    <Sidebar_User_info>
                        <Sidebar_User_name_idv>
                            <Sidebar_User_name_h2>
                                관리자 페이지
                            </Sidebar_User_name_h2>
                        </Sidebar_User_name_idv>
                    </Sidebar_User_info>

                </Sidebar_Section_Class>
            </Sidebar_Article_Class>            

            <Sidebar_footer_article>
                <Sidebar_footer_Writing_div>
                    <Sidebar_footer_Writing_h3>
                        <Sidebar_footer_Writing_button>
                            <Sidebar_footer_Writing_span>관리자 메뉴</Sidebar_footer_Writing_span>
                        </Sidebar_footer_Writing_button>
                    </Sidebar_footer_Writing_h3>
                    
                    <Sidebar_footer_Writing_ul_a>
                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong >신고목록</Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong >스트리밍 정지목록</Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong >회원 스트리밍권한 정지목록</Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong >광고신청목록</Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong >광고목록</Sidebar_footer_Writing_strong>
                            </Sidebar_footer_Writing_1_a>
                        </Sidebar_footer_Writing_li_1>

                     </Sidebar_footer_Writing_ul_a>
                </Sidebar_footer_Writing_div>
            </Sidebar_footer_article>
        </Sidebar_Div_in>
    </Sidebar_Div>
    )
}

export default sidebar;