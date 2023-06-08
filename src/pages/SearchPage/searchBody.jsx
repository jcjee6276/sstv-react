import React from 'react';
import { Streamer_nickname_span, Streamer_list, Streamer_span, Streamer_a, Streamer_div, Writing_post_con, Writing_list, Writing_span, Writing_a, Writing_h4, Writing_main, Broad_ul, Broad_list, Live_img,Live_span, Live_a, List_list, Com_main_body_vod_1_titleU_em, Replay_info, Replay_img, Replay_list_li, Replay_h2, Notice_dd, Notice_dt, Intro_dd, Follow_dd, Nickname_info_a, Search_Streamer_profile, Search_Streamer_div2, Search_Streamer_div, Search_body, Search_body_ground, Search_main_div, Search_Streamer_img, Streamer_follow_button, Stream_main_div, Search_Streamer_info, Search_info_Nickname, Search_Nickname_a, Search_content, Search_relate, Search_main_con, Search_main_p, Search_profile, Profile_zone, Thumb_area, Nickname_info, Nickname_info2, UserId_div, Follow_dl, Follow_dt, Intro_dl, Intro_dt, Notice_dl, Profile_more, Profile_button, Replay_zone, Replay_nickname, Replay_nickname_a, Replay_list_body, Replay_list_body_2, Replay_list_ul, Replay_thumb_box, Replay_cBox, Replay_cBox_h3, Replay_cBox_a, Replay_comment_count, Replay_detail, Replay_Streamer_nic, Replay_Streamer_nickname, Replay_nickname_span, Replay_box_a, Replay_view_span, Replay_date_span, Live_list, Live_h4, Broad_title_li, Broad_title_a, Broad_title_span, Broad_streamer_li, Broad_streamer_em, Broad_streamer_a, Broad_bs_em, Broad_view_li, Broad_info_tit, Broad_num_span, Broad_num_em, Broad_line_span, Broad_img_a, Broad_title_img, Writing_post_list, Writing_tit, Writing_tit_a, Writing_comment_count, Writing_body, Writing_post_info, Writing_post_info_nic, Writing_post_streamer, Writing_post_date, Writing_view_count, Streamer_h4, Streamer_list_ul, Streamer_list_li, Streamer_thumb_a, Streamer_thumb_span, Streamer_nickname_a, Streamer_userid_em, Streamer_user_li, Streamer_info_em, Streamer_info_a, Streamer_view, Streamer_view_em, Streamer_stack_view, Streamer_stack_time, Streamer_follow_count, Search_keyword, Search_keyword_span } from './style';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const searchBody = ({select, setSelect})=>{
    console.log("바디"+select);
    return(
        <Search_body>
            <Search_body_ground>
            {/* <Stream_main_div>
                <Search_main_div>
                    
                    <Search_Streamer_div>
                        <Search_Streamer_div2>
                            <Search_Streamer_profile >
                                
                                <Search_Streamer_img src={process.env.PUBLIC_URL+'/img/base_profile.jpg'} />
                                
                            </Search_Streamer_profile>
                            
                            <Streamer_follow_button>
                            <FontAwesomeIcon icon={faThumbsUp} /> 팔로우
                            </Streamer_follow_button>
                            
                            

                        </Search_Streamer_div2>

                        
                        
                        
                    </Search_Streamer_div>
                    
                    
                </Search_main_div>
                </Stream_main_div> */}


                <Search_content id='width'> 
                    <Search_relate>

                    </Search_relate>
                    <Search_main_con>
                        {select===0? 
                        <div>
                        <Search_main_p>
                            <Search_keyword>"검색어"</Search_keyword>
                            에 대한 통합검색 결과 입니다. (
                            <Search_keyword_span>0건</Search_keyword_span>
                            )
                        </Search_main_p>
                        <Search_profile id='contetn'>
                            <Profile_zone>
                                <Thumb_area>
                                     <Search_Streamer_img src={process.env.PUBLIC_URL+'/img/base_profile.jpg'} />
                                </Thumb_area>
                                <Streamer_follow_button>
                            <FontAwesomeIcon icon={faThumbsUp} /> 팔로우
                            </Streamer_follow_button>
                            <Nickname_info>
                                <Nickname_info2>
                                    <Nickname_info_a>테스터</Nickname_info_a>
                                </Nickname_info2>
                                <UserId_div>testId</UserId_div>
                                <Follow_dl>
                                    <Follow_dt>팔로우</Follow_dt>
                                    <Follow_dd>100</Follow_dd>
                                </Follow_dl>
                                <Intro_dl>
                                    <Intro_dt>소개글</Intro_dt>
                                    <Intro_dd>안녕하세요</Intro_dd>
                                </Intro_dl>
                                <Notice_dl>
                                    <Notice_dt>공지</Notice_dt>
                                    <Notice_dd>고고</Notice_dd>
                                </Notice_dl>
                            </Nickname_info>
                            <Profile_more>
                            
                            </Profile_more>

                            </Profile_zone>
                        </Search_profile>
                        </div>
                        : null}
                    
                    {select===0?
                        <Replay_zone>
                            <Replay_h2>
                            <Replay_nickname_a>
                                <Replay_nickname>테스터</Replay_nickname>님의 다시보기
                                </Replay_nickname_a>
                            </Replay_h2>
                            

                            <Replay_list_body>
                                <Replay_list_body_2>
                                    <Replay_list_ul>

                                        <Replay_list_li>
                                            <Replay_thumb_box>
                                                <Replay_box_a>
                                                <Replay_img src='https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20230606_0222743F_246753681_2_r' />
                                                </Replay_box_a>
                                            </Replay_thumb_box>
                                            <Replay_cBox>
                                                <Replay_cBox_h3>
                                                    <Replay_cBox_a>테스트 제목</Replay_cBox_a>
                                                </Replay_cBox_h3>
                                                <Replay_comment_count>[6]</Replay_comment_count>
                                                <Replay_detail>
                                                    <Replay_Streamer_nic>
                                                        <Replay_Streamer_nickname>
                                                            <Replay_nickname_span>테스트스트리머</Replay_nickname_span>
                                                        </Replay_Streamer_nickname>
                                                    </Replay_Streamer_nic>
                                                </Replay_detail>

                                                <Replay_info>
                                                    <Replay_view_span>
                                                       ▹ 100 
                                                    </Replay_view_span>
                                                    <Replay_date_span>
                                                      ● 1일전
                                                    </Replay_date_span>
                                                </Replay_info>

                                            </Replay_cBox>
                                        </Replay_list_li>

                                    </Replay_list_ul>
                                </Replay_list_body_2>
                            </Replay_list_body>
                        </Replay_zone>
                       : select === 2? 
                       <Replay_zone>
                            <Replay_h2>
                            <Replay_nickname_a>
                                <Replay_nickname>테스터</Replay_nickname>님의 다시보기
                                </Replay_nickname_a>
                            </Replay_h2>
                            

                            <Replay_list_body>
                                <Replay_list_body_2>
                                    <Replay_list_ul>

                                        <Replay_list_li>
                                            <Replay_thumb_box>
                                                <Replay_box_a>
                                                <Replay_img src='https://videoimg.afreecatv.com/php/SnapshotLoad.php?rowKey=20230606_0222743F_246753681_2_r' />
                                                </Replay_box_a>
                                            </Replay_thumb_box>
                                            <Replay_cBox>
                                                <Replay_cBox_h3>
                                                    <Replay_cBox_a>테스트 제목</Replay_cBox_a>
                                                </Replay_cBox_h3>
                                                <Replay_comment_count>[6]</Replay_comment_count>
                                                <Replay_detail>
                                                    <Replay_Streamer_nic>
                                                        <Replay_Streamer_nickname>
                                                            <Replay_nickname_span>테스트스트리머</Replay_nickname_span>
                                                        </Replay_Streamer_nickname>
                                                    </Replay_Streamer_nic>
                                                </Replay_detail>

                                                <Replay_info>
                                                    <Replay_view_span>
                                                       ▹ 100 
                                                    </Replay_view_span>
                                                    <Replay_date_span>
                                                      ● 1일전
                                                    </Replay_date_span>
                                                </Replay_info>

                                            </Replay_cBox>
                                        </Replay_list_li>

                                    </Replay_list_ul>
                                </Replay_list_body_2>
                            </Replay_list_body>
                        </Replay_zone>
                      : null }

                    {select===0? 
                    <div>
                        <Live_list>
                            <Live_h4>
                                <Live_a>생방송</Live_a>
                                <Live_span>(0건)</Live_span>
                                <Live_img src='https://res.afreecatv.com/images/aftv_search/ico_live.gif'/>
                            </Live_h4>
                        </Live_list>

                        <Broad_list>
                            <Broad_ul>
                                <Broad_title_li>
                                    <Broad_img_a>
                                        <Broad_title_img />
                                    </Broad_img_a>
                                    <Broad_title_a>
                                        <Broad_title_span>방송제목</Broad_title_span>
                                    </Broad_title_a>
                                </Broad_title_li>
                                <Broad_streamer_li>
                                    <Broad_streamer_em>정보</Broad_streamer_em>스트리머 명
                                    <Broad_streamer_a>testUser(testnickname)</Broad_streamer_a>
                                </Broad_streamer_li>
                                <Broad_bs_em>
                                    <Broad_view_li>
                                        <Broad_info_tit>참여정보</Broad_info_tit>
                                        <Broad_num_span>
                                            <Broad_num_em>0</Broad_num_em>
                                        </Broad_num_span>
                                        <Broad_line_span>
                                        방송시작 2023-06-07 17:11
                                        </Broad_line_span>
                                    </Broad_view_li>
                                </Broad_bs_em>

                                
                            </Broad_ul>

                            {/* 반복할 부분 */}
                            <Broad_ul>
                                <Broad_title_li>
                                    <Broad_img_a>
                                        <Broad_title_img />
                                    </Broad_img_a>
                                    <Broad_title_a>
                                        <Broad_title_span>방송제목</Broad_title_span>
                                    </Broad_title_a>
                                </Broad_title_li>
                                <Broad_streamer_li>
                                    <Broad_streamer_em>정보</Broad_streamer_em>스트리머 명
                                    <Broad_streamer_a>testUser(testnickname)</Broad_streamer_a>
                                </Broad_streamer_li>
                                <Broad_bs_em>
                                    <Broad_view_li>
                                        <Broad_info_tit>참여정보</Broad_info_tit>
                                        <Broad_num_span>
                                            <Broad_num_em>0</Broad_num_em>
                                        </Broad_num_span>
                                        <Broad_line_span>
                                        방송시작 2023-06-07 17:11
                                        </Broad_line_span>
                                    </Broad_view_li>
                                </Broad_bs_em>

                                
                            </Broad_ul>

                        </Broad_list>
                        </div>
                       : select===1? 
                       
                       <div>
                       <Live_list>
                           <Live_h4>
                               <Live_a>생방송</Live_a>
                               <Live_span>(0건)</Live_span>
                               <Live_img src='https://res.afreecatv.com/images/aftv_search/ico_live.gif'/>
                           </Live_h4>
                       </Live_list>

                       <Broad_list>
                           <Broad_ul>
                               <Broad_title_li>
                                   <Broad_img_a>
                                       <Broad_title_img />
                                   </Broad_img_a>
                                   <Broad_title_a>
                                       <Broad_title_span>방송제목</Broad_title_span>
                                   </Broad_title_a>
                               </Broad_title_li>
                               <Broad_streamer_li>
                                   <Broad_streamer_em>정보</Broad_streamer_em>스트리머 명
                                   <Broad_streamer_a>testUser(testnickname)</Broad_streamer_a>
                               </Broad_streamer_li>
                               <Broad_bs_em>
                                   <Broad_view_li>
                                       <Broad_info_tit>참여정보</Broad_info_tit>
                                       <Broad_num_span>
                                           <Broad_num_em>0</Broad_num_em>
                                       </Broad_num_span>
                                       <Broad_line_span>
                                       방송시작 2023-06-07 17:11
                                       </Broad_line_span>
                                   </Broad_view_li>
                               </Broad_bs_em>

                               
                           </Broad_ul>

                           {/* 반복할 부분 */}
                           <Broad_ul>
                               <Broad_title_li>
                                   <Broad_img_a>
                                       <Broad_title_img />
                                   </Broad_img_a>
                                   <Broad_title_a>
                                       <Broad_title_span>방송제목</Broad_title_span>
                                   </Broad_title_a>
                               </Broad_title_li>
                               <Broad_streamer_li>
                                   <Broad_streamer_em>정보</Broad_streamer_em>스트리머 명
                                   <Broad_streamer_a>testUser(testnickname)</Broad_streamer_a>
                               </Broad_streamer_li>
                               <Broad_bs_em>
                                   <Broad_view_li>
                                       <Broad_info_tit>참여정보</Broad_info_tit>
                                       <Broad_num_span>
                                           <Broad_num_em>0</Broad_num_em>
                                       </Broad_num_span>
                                       <Broad_line_span>
                                       방송시작 2023-06-07 17:11
                                       </Broad_line_span>
                                   </Broad_view_li>
                               </Broad_bs_em>

                               
                           </Broad_ul>

                       </Broad_list>
                       </div>

                    :null}


                    {select===0? 
                    <div>
                        <Writing_main>
                            <Writing_h4>
                                <Writing_a>커뮤니티 게시글</Writing_a>
                                <Writing_span>(0건)</Writing_span>
                            </Writing_h4>
                        </Writing_main>

                        <Writing_list>
                            {/* 반복될 부분 */}
                            <Writing_post_list>
                                <Writing_post_con>
                                    <Writing_tit>
                                        <Writing_tit_a>게시글 제목</Writing_tit_a>
                                        <Writing_comment_count>[0]</Writing_comment_count>
                                    </Writing_tit>
                                    <Writing_body>
                                        콘텐츠 내용
                                    </Writing_body>
                                    <Writing_post_info>
                                        <Writing_post_info_nic>
                                            글쓴이
                                        </Writing_post_info_nic>
                                        <Writing_post_streamer>
                                            글쓴곳.
                                        </Writing_post_streamer>
                                        <Writing_post_date>2023-06-08</Writing_post_date>
                                        <Writing_view_count>조회 100</Writing_view_count>
                                    </Writing_post_info>
                                </Writing_post_con>
                            </Writing_post_list>
                        </Writing_list>
                        </div>
                       : select===3? 
                    
                       <div>
                        <Writing_main>
                            <Writing_h4>
                                <Writing_a>커뮤니티 게시글</Writing_a>
                                <Writing_span>(0건)</Writing_span>
                            </Writing_h4>
                        </Writing_main>

                        <Writing_list>
                            {/* 반복될 부분 */}
                            <Writing_post_list>
                                <Writing_post_con>
                                    <Writing_tit>
                                        <Writing_tit_a>게시글 제목</Writing_tit_a>
                                        <Writing_comment_count>[0]</Writing_comment_count>
                                    </Writing_tit>
                                    <Writing_body>
                                        콘텐츠 내용
                                    </Writing_body>
                                    <Writing_post_info>
                                        <Writing_post_info_nic>
                                            글쓴이
                                        </Writing_post_info_nic>
                                        <Writing_post_streamer>
                                            글쓴곳.
                                        </Writing_post_streamer>
                                        <Writing_post_date>2023-06-08</Writing_post_date>
                                        <Writing_view_count>조회 100</Writing_view_count>
                                    </Writing_post_info>
                                </Writing_post_con>
                            </Writing_post_list>
                        </Writing_list>
                        </div>
                    
                    :null}
                        
                        {select===0? 
                        <div>
                        <Streamer_div>
                            <Streamer_h4>
                                <Streamer_a>
                                    스트리머
                                </Streamer_a>
                                <Streamer_span>(0건)</Streamer_span>
                            </Streamer_h4>
                        </Streamer_div>

                
                        <Streamer_list>
                            {/* 반복할부분 */}
                            <Streamer_list_ul>
                                <Streamer_list_li>
                                    <Streamer_thumb_a>
                                        {/* 이미지임 */}
                                        <Streamer_thumb_span src={process.env.PUBLIC_URL+'/img/base_profile.jpg'} />
                                    </Streamer_thumb_a>
                                    <Streamer_nickname_a>
                                        <Streamer_nickname_span>유저닉네임
                                            <Streamer_userid_em>(userid)</Streamer_userid_em>
                                        </Streamer_nickname_span>
                                    </Streamer_nickname_a>
                                </Streamer_list_li>
                                <Streamer_user_li>
                                    <Streamer_info_em>유저정보</Streamer_info_em>
                                    커뮤니티 명
                                    <Streamer_info_a>유저닉네임</Streamer_info_a>
                                </Streamer_user_li>
                                <Streamer_view>
                                    <Streamer_view_em>활동내역</Streamer_view_em>
                                    <Streamer_stack_view>누적시청자 수 0명</Streamer_stack_view>
                                    <Streamer_stack_time>방송시간 0시간</Streamer_stack_time>
                                    <Streamer_follow_count>0명</Streamer_follow_count>
                                </Streamer_view>
                            </Streamer_list_ul>
                        </Streamer_list>
                        </div>
                       : select===4? 
                        <div>
                        <Streamer_div>
                            <Streamer_h4>
                                <Streamer_a>
                                    스트리머
                                </Streamer_a>
                                <Streamer_span>(0건)</Streamer_span>
                            </Streamer_h4>
                        </Streamer_div>

                       <Streamer_list>
                       {/* 반복할부분 */}
                       <Streamer_list_ul>
                           <Streamer_list_li>
                               <Streamer_thumb_a>
                                   {/* 이미지임 */}
                                   <Streamer_thumb_span src={process.env.PUBLIC_URL+'/img/base_profile.jpg'} />
                               </Streamer_thumb_a>
                               <Streamer_nickname_a>
                                   <Streamer_nickname_span>유저닉네임
                                       <Streamer_userid_em>(userid)</Streamer_userid_em>
                                   </Streamer_nickname_span>
                               </Streamer_nickname_a>
                           </Streamer_list_li>
                           <Streamer_user_li>
                               <Streamer_info_em>유저정보</Streamer_info_em>
                               커뮤니티 명
                               <Streamer_info_a>유저닉네임</Streamer_info_a>
                           </Streamer_user_li>
                           <Streamer_view>
                               <Streamer_view_em>활동내역</Streamer_view_em>
                               <Streamer_stack_view>누적시청자 수 0명</Streamer_stack_view>
                               <Streamer_stack_time>방송시간 0시간</Streamer_stack_time>
                               <Streamer_follow_count>0명</Streamer_follow_count>
                           </Streamer_view>
                       </Streamer_list_ul>
                   </Streamer_list>
                   </div>
                    : null}

                    </Search_main_con>
                </Search_content>
            </Search_body_ground>
        </Search_body>
    )
}

export default searchBody;

