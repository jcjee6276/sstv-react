/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Sidebar_p, Sidebar_Article_Class, Sidebar_Body_Streaming, Sidebar_Body_article, Sidebar_Body_div, Sidebar_Body_image_Head, Sidebar_Body_image_span, Sidebar_Body_image_span_live, Sidebar_Body_image_span_views, Sidebar_Body_image_thumb, Sidebar_Div, Sidebar_Div_in, Sidebar_Profile, Sidebar_Section_Class, Sidebar_User_a, Sidebar_User_badge_Div, Sidebar_User_badge_i, Sidebar_User_id_span, Sidebar_User_info, Sidebar_User_name_h2, Sidebar_User_name_idv, Sidebar_a_in_div, Sidebar_Writing_Button, Sidebar_Writing_Span, Sidebar_footer_article, Sidebar_footer_VOD_div, Sidebar_footer_VOD_h3, Sidebar_footer_VOD_button, Sidebar_footer_VOD_span, Sidebar_footer_VOD_li_ul, Sidebar_footer_VOD_li_1, Sidebar_footer_VOD_1_a, Sidebar_footer_Writing_div, Sidebar_footer_Writing_h3, Sidebar_footer_Writing_button, Sidebar_footer_Writing_span, Sidebar_footer_Writing_li_1, Sidebar_footer_Writing_1_a, Sidebar_footer_Writing_strong, Sidebar_footer_Writing_ul_a } from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faWifi, faFilm, faFontAwesome, faUser } from '@fortawesome/free-solid-svg-icons';
import Writing from './Writing';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const sidebar = () => {
    const navigate = useNavigate();
    const [writingUserId, setWritingUserId] = useState('');
    const [writingUserNickname, setWritingUserNickname] = useState('');
    const {data} = useSWR('/user/login', fetcher);
    const [userImage, setUserImage] = useState('');
    console.log(data);
    // const userId = data?.userId;
    //const userNickname = data?.userNickname;
    const location = useLocation();
    const currentPath = location.pathname.split("/");
    const userId = currentPath[2];
    

    useEffect(() => {
         axios.get('/user/getUser/'+userId)
         .then((response)=> {
            const data = response.data;
            const parseData = data['data'];
            setWritingUserId(parseData.userId);
            console.log(writingUserId);
            setWritingUserNickname(parseData.userNickname);
            setUserImage(parseData.profilePhoto);
         })
     },[])
     console.log("프사"+userImage);
    
    const onClickWritingList= () => {
        navigate(`/writingList/${userId}`);
    }

    const imageError = (event) => {
        event.target.src = process.env.PUBLIC_URL+'/img/base_profile.jpg';
    }
    
    const image = process.env.PUBLIC_URL+'/img/'+userImage;

    return(
        
        
    <Sidebar_Div>
        <Sidebar_Div_in>
            <Sidebar_Article_Class>
                <Sidebar_Section_Class>
                    <Sidebar_User_a>
                        <Sidebar_a_in_div >
                           <Sidebar_Profile src={image} onError={imageError}/>
                        </Sidebar_a_in_div>
                    </Sidebar_User_a>

                    <Sidebar_User_info>
                        <Sidebar_User_name_idv>
                            <Sidebar_User_name_h2>
                                {writingUserNickname}
                            </Sidebar_User_name_h2>
                            <Sidebar_User_id_span>
                                ({writingUserId})
                            </Sidebar_User_id_span>
                        </Sidebar_User_name_idv>

                        <Sidebar_User_badge_Div>
                            <Sidebar_User_badge_i>
                                관리자BJ
                            </Sidebar_User_badge_i>
                        </Sidebar_User_badge_Div>
                    </Sidebar_User_info>

                </Sidebar_Section_Class>
            </Sidebar_Article_Class>

            <Sidebar_Body_article>
                <Sidebar_Body_div>
                    <Sidebar_Body_Streaming>
                        <Sidebar_Body_image_span>
                            <Sidebar_Body_image_thumb>
                                
                            </Sidebar_Body_image_thumb>
                        </Sidebar_Body_image_span>

                        <Sidebar_Body_image_Head>
                            <Sidebar_Body_image_span_live>
                                LIVE <FontAwesomeIcon icon={faWifi} beatFade style={{color: "#ff0000",}} />
                            </Sidebar_Body_image_span_live>

                            <Sidebar_Body_image_span_views>
                            <FontAwesomeIcon icon={faUser} />  test

                            </Sidebar_Body_image_span_views>

                            

                        </Sidebar_Body_image_Head>
                        <Sidebar_p>ff </Sidebar_p>

                    </Sidebar_Body_Streaming>
                </Sidebar_Body_div>
                
                <Link to={`/writing/${userId}`}>
                <Sidebar_Writing_Button>
                <FontAwesomeIcon icon={faPencil} style={{color: "#4279ff",}} />
                    <Sidebar_Writing_Span>
                    글쓰기
                    </Sidebar_Writing_Span>
                </Sidebar_Writing_Button>
                </Link>
            </Sidebar_Body_article>
            

            <Sidebar_footer_article>
                <Sidebar_footer_VOD_div>
                    <Sidebar_footer_VOD_h3>
                        <Sidebar_footer_VOD_button>
                            <Sidebar_footer_VOD_span>VOD</Sidebar_footer_VOD_span>
                        </Sidebar_footer_VOD_button>
                    </Sidebar_footer_VOD_h3>

                    <Sidebar_footer_VOD_li_ul>
                        <Sidebar_footer_VOD_li_1>
                            <Sidebar_footer_VOD_1_a>다시보기</Sidebar_footer_VOD_1_a>
                        </Sidebar_footer_VOD_li_1>
                    </Sidebar_footer_VOD_li_ul>
                </Sidebar_footer_VOD_div>
                <Sidebar_footer_Writing_div>
                    <Sidebar_footer_Writing_h3>
                        <Sidebar_footer_Writing_button>
                            <Sidebar_footer_Writing_span>게시판</Sidebar_footer_Writing_span>
                        </Sidebar_footer_Writing_button>
                    </Sidebar_footer_Writing_h3>
                    <Sidebar_footer_Writing_ul_a>
                        <Sidebar_footer_Writing_li_1>
                            <Sidebar_footer_Writing_1_a>
                                <Sidebar_footer_Writing_strong onClick={onClickWritingList}>자유게시판</Sidebar_footer_Writing_strong>
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