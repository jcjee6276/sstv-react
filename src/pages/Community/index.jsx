import React, { useEffect, useState } from 'react';
import Header from './header';
import {Com_main_body_writing_list_li_em, Com_main_body_writing_list_a, Com_main_body_writing_list_li, Com_main_body_writing_image_img,Com_main_body_writing_image_div, Com_main_body_writing_title_p, Com_main_body_writing_div_3, Com_main_body_writing_a,Com_main_body_vod_3_a, Com_main_body_vod_2_title_em, Com_main_body_vod_2_div, Com_main_body_vod_2_img, Com_main_body_vod_1_img, Writing_form_Main_div, Sidebar_Main_div, Com_main_body_article, Com_maind_body_div, Com_main_body_div_2, Com_main_body_section, Com_main_body_vod_div, Com_main_body_vod_h3, Com_main_body_vod_a, Com_main_body_vod_section, Com_main_body_vod_1_div, Com_main_body_vod_1_a, Com_main_body_vod_1_span, Com_main_body_vod_1_time_span, Com_main_body_vod_1_title_div, Com_main_body_vod_1_title_p, Com_main_body_vod_1_titleU_div, Com_main_body_vod_1_titleU_span, Com_main_body_vod_1_titleU_em, Com_main_body_vod_1_titleU_2_span, Com_main_body_vod_2_a, Com_main_body_vod_2_span, Com_main_body_vod_2_time, Com_main_body_vod_2_title_div, Com_main_body_vod_2_title_p, Com_main_body_vod_2_title_div_2, Com_main_body_vod_2_title_span, Com_main_body_vod_2_title_2_span, Com_main_body_vod_3_div, Com_main_body_vod_3_span, Com_main_body_vod_3_img, Com_main_body_writing_div, Com_main_body_writing_h3, Com_main_body_writing_div_2, Com_main_body_writing_div_4, Com_main_body_writing_username_div, Com_main_body_writing_userimage_div, Com_main_body_writing_userimage_img, Com_main_body_writing_username_button, Com_main_body_writing_username_span, Com_main_body_writing_userdate_div, Com_main_body_writing_user_view_em, Com_main_body_writing_title_div, Com_main_body_writing_title_strong, Com_main_body_writing_image_a, Com_main_body_writing_image_button, Com_main_body_writing_image_span, Com_main_body_writing_list_div, Com_main_body_writing_list_ul, Com_main_body_writing_list_li_div, Com_main_body_writing_list_li_p, Com_main_body_writing_list_li_span, Com_main_body_writing_date_div, Com_main_body_writing_show_em } from './style';
import Sidebar from './sidebar';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { useParams, useNavigate } from 'react-router-dom';
import CoMain from './coMain';
import UserInfo from './userInfo';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faChevronRight, faVideo, faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import useUserStore from '../utils/useUserStore';
const Community = () => {
    const navigate = useNavigate();
    const {data} = useSWR('/user/login', fetcher);
    const {userId} = useParams();
    const [blackList, setBlackList] = useState([]);
    const [blackUser, setBlackUser] = useState(false);
    const [writingList, setWritingList] = useState([]);
    const sessionUser = data?.userId;
    const users = useUserStore((state) => state.users);
    const fetchUsers = useUserStore((state)=> state.fetchUsers);
    console.log("pp"+userId);

    useEffect(()=> {
        axios.get('/community/writingList/'+userId)
        .then((response)=> {
            const jsonData = response.data;
            setWritingList(jsonData['data']);
        })
    },[])

    const onClickWriting = () => {
        navigate(`/Writing/${userId}`);
    }
    // useEffect(()=> {
    //     axios.get('/fan/getBlackList/'+userId)
    //     .then((response)=> {
    //         const black = response.data;
    //         setBlackList(black['data']);
    //     })
    // },[userId])
    // console.log(blackList);
    // for(let i =0; i<blackList.length; i++){
    //     if(blackList[i]===sessionUser) {
    //         navigate('/');
    //     }
    // }
    console.log("zus+"+users);
    console.log("zusfetch+"+fetchUsers);
    
    console.log("블랙유저:"+blackUser);
    
    return(
        <body>
       <Header/>
       <Sidebar_Main_div>
            <Sidebar/>
       
       <Writing_form_Main_div>
       
        <Com_main_body_article>

            <Com_maind_body_div>
                <Com_main_body_div_2>
                    <Com_main_body_section>
                        <Com_main_body_vod_div>
                            <Com_main_body_vod_h3>
                                <Com_main_body_vod_a>
                                <FontAwesomeIcon icon={faVideo} style={{color: "#2e7bff",}} /> 다시보기 <FontAwesomeIcon icon={faChevronRight} style={{color: "#3881ff",}} />
                                </Com_main_body_vod_a>
                            </Com_main_body_vod_h3>
                            <Com_main_body_vod_section>
                                <Com_main_body_vod_1_div>
                                    <Com_main_body_vod_1_a>
                                        <Com_main_body_vod_1_span>
                                            <Com_main_body_vod_1_img src='https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20230430_A8B04E2A_246189714_2_l'></Com_main_body_vod_1_img>
                                            <Com_main_body_vod_1_time_span>10:00:00</Com_main_body_vod_1_time_span>
                                        </Com_main_body_vod_1_span>
                                        <Com_main_body_vod_1_title_div>
                                            <Com_main_body_vod_1_title_p>test Title</Com_main_body_vod_1_title_p>
                                            <Com_main_body_vod_1_titleU_div>
                                                <Com_main_body_vod_1_titleU_span>
                                                    <Com_main_body_vod_1_titleU_em></Com_main_body_vod_1_titleU_em>
                                                    223
                                                </Com_main_body_vod_1_titleU_span>
                                                <Com_main_body_vod_1_titleU_2_span>
                                                   ● 2023-05-27
                                                </Com_main_body_vod_1_titleU_2_span>
                                            </Com_main_body_vod_1_titleU_div>
                                        </Com_main_body_vod_1_title_div>
                                    </Com_main_body_vod_1_a>
                                </Com_main_body_vod_1_div>

                            <Com_main_body_vod_2_div>
                                <Com_main_body_vod_2_a>
                                    <Com_main_body_vod_2_span>
                                        <Com_main_body_vod_2_img src="https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20230525_B51CADF3_246575502_3_l"/>
                                        <Com_main_body_vod_2_time>08:00:00</Com_main_body_vod_2_time>
                                    </Com_main_body_vod_2_span>
                                    <Com_main_body_vod_2_title_div>
                                        <Com_main_body_vod_2_title_p>
                                            title test2
                                        </Com_main_body_vod_2_title_p>
                                        <Com_main_body_vod_2_title_div_2>
                                            <Com_main_body_vod_2_title_span>
                                                <Com_main_body_vod_2_title_em></Com_main_body_vod_2_title_em>
                                                500
                                            </Com_main_body_vod_2_title_span>
                                            <Com_main_body_vod_2_title_2_span>
                                            ● 2023-05-22
                                            </Com_main_body_vod_2_title_2_span>
                                        </Com_main_body_vod_2_title_div_2>
                                    </Com_main_body_vod_2_title_div>
                                </Com_main_body_vod_2_a>
                            </Com_main_body_vod_2_div>

                            <Com_main_body_vod_3_div>
                                <Com_main_body_vod_3_a>
                                    <Com_main_body_vod_3_span>
                                        <Com_main_body_vod_3_img src='https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20230525_6CF3E1F9_246566929_3_l' />
                                        <Com_main_body_vod_2_time>08:00:00</Com_main_body_vod_2_time>
                                    </Com_main_body_vod_3_span>
                                    <Com_main_body_vod_2_title_div>
                                        <Com_main_body_vod_2_title_p>
                                            title test2
                                        </Com_main_body_vod_2_title_p>
                                        <Com_main_body_vod_2_title_div_2>
                                            <Com_main_body_vod_2_title_span>
                                                <Com_main_body_vod_2_title_em></Com_main_body_vod_2_title_em>
                                                500
                                            </Com_main_body_vod_2_title_span>
                                            <Com_main_body_vod_2_title_2_span>
                                            ● 2023-05-22
                                            </Com_main_body_vod_2_title_2_span>
                                        </Com_main_body_vod_2_title_div_2>
                                    </Com_main_body_vod_2_title_div>
                                </Com_main_body_vod_3_a>
                            </Com_main_body_vod_3_div>

                            

                            </Com_main_body_vod_section>
                            
                        </Com_main_body_vod_div>
                        
                        <Com_main_body_writing_div>
                                
                        </Com_main_body_writing_div>
                        <Com_main_body_writing_h3>
                                    <Com_main_body_writing_a>
                                        
                                    </Com_main_body_writing_a>
                                </Com_main_body_writing_h3>
                        <Com_main_body_writing_div>

                        <Com_main_body_writing_h3>
                                    <Com_main_body_writing_a onClick={()=>{
                                        navigate('/writingList/'+userId)
                                    }}>
                                    <FontAwesomeIcon icon={faPenToSquare} style={{color: "#337eff",}} /> 게시글 <FontAwesomeIcon icon={faChevronRight} style={{color: "#3881ff",}} />
                                    </Com_main_body_writing_a>
                                </Com_main_body_writing_h3>
                                <Com_main_body_writing_div_2>
                                    <Com_main_body_writing_div_3>
                                        <Com_main_body_writing_div_4>
                                            <Com_main_body_writing_username_div>
                                                <Com_main_body_writing_userimage_div>
                                                    <Com_main_body_writing_userimage_img src=''/>
                                                </Com_main_body_writing_userimage_div>
                                                <Com_main_body_writing_username_button>
                                                    <Com_main_body_writing_username_span>testuser</Com_main_body_writing_username_span>
                                                </Com_main_body_writing_username_button>
                                                <Com_main_body_writing_userdate_div>
                                                    2023-05-26 <Com_main_body_writing_user_view_em>∙ 조회 0</Com_main_body_writing_user_view_em>
                                                </Com_main_body_writing_userdate_div>
                                            </Com_main_body_writing_username_div>

                                            <Com_main_body_writing_title_div>
                                                <Com_main_body_writing_a>
                                                    <Com_main_body_writing_title_strong>testitle</Com_main_body_writing_title_strong>
                                                    <Com_main_body_writing_title_p>testcontent</Com_main_body_writing_title_p>
                                                </Com_main_body_writing_a>
                                            </Com_main_body_writing_title_div>

                                        </Com_main_body_writing_div_4>

                                        <Com_main_body_writing_image_div>
                                        <Com_main_body_writing_image_a>
                                            <Com_main_body_writing_image_img src='./img/base_profile.jpg'/>
                                        </Com_main_body_writing_image_a>
                                    </Com_main_body_writing_image_div>

                                    <Com_main_body_writing_image_button>
                                        <Com_main_body_writing_image_span></Com_main_body_writing_image_span>
                                    </Com_main_body_writing_image_button>

                                    </Com_main_body_writing_div_3>
                                
                                {writingList.slice(0,4).map((list, index)=> {

                                return(
                                    <Com_main_body_writing_list_div>
                                        <Com_main_body_writing_list_ul>
                                            <Com_main_body_writing_list_li>
                                                <Com_main_body_writing_list_a href={'/'+list.writingNo+'/'+userId}>
                                                    <Com_main_body_writing_list_li_div>
                                                        <Com_main_body_writing_list_li_p>
                                                            <Com_main_body_writing_list_li_span >{list.title}</Com_main_body_writing_list_li_span>
                                                        </Com_main_body_writing_list_li_p>
                                                        <Com_main_body_writing_list_li_em>[{list.commentCount}]</Com_main_body_writing_list_li_em>
                                                    </Com_main_body_writing_list_li_div>
                                                </Com_main_body_writing_list_a>
                                                <Com_main_body_writing_date_div>
                                                   <Com_main_body_writing_show_em>조회 0</Com_main_body_writing_show_em>
                                                </Com_main_body_writing_date_div>
                                            </Com_main_body_writing_list_li>
                                        </Com_main_body_writing_list_ul>
                                    </Com_main_body_writing_list_div>
                                )
                                })}

                                    

                                </Com_main_body_writing_div_2>
                        </Com_main_body_writing_div>
                        

                    </Com_main_body_section>

                    
                </Com_main_body_div_2>
                
            </Com_maind_body_div>

            
        
        </Com_main_body_article>
        <UserInfo/>
       </Writing_form_Main_div>

       </Sidebar_Main_div>
       </body>
    )
}

export default Community;