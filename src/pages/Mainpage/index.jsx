import React, {useEffect, useState} from 'react';
import {Main_Body,Main_stream_list_span, Main_stream_list_h4, Main_stream_top_h4, Main_first_div, Main_second_div, Main_stram_div, Main_stream_four_div, Main_stream_second_div, Main_stream_third_div, Main_stream_top_h6, Main_third_div, Main_stream_top_em, Main_stream_butto_div, Main_stream_button_a, Main_stream_body_div, Main_stream_body_div_2, Main_stream_body_div_3, Main_stream_body_title_div, Main_steram_body_title_h4, Main_stream_body_title_em, Main_body_stream_list_div, Main_stream_list_div, Main_stream_list_div_2, Main_stream_list_img, Main_stream_list_watching_ul, Main_stream_list_watching_li_1, Main_stream_list_watching_li_2, Main_four_div } from './style';
import { faThumbsUp, faUser, faUserGroup, faCheck ,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../Community/sidebar';
import Header from './header';
import axios from 'axios';
import { key } from 'fontawesome';
import LightChatroom from '../Chat/lightChatroom';
import { useNavigate } from 'react-router-dom';


const Mainpage = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);
    // useEffect(()=> {
    //     return <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    // },[isDarkMode])

    // =============================[Code By LDW Start]============================= //
    // 1. 일일히 baseURL : 'http://localhost:3000'이렇게 작성 안하고 전역변수로 만드는 방법 찾기
    const [streamingList, setStreamingList] = useState([]);

    useEffect(() => {     
        const fetchStreamingList = async () => {          
            const response = await axios.create({
              baseURL: 'http://localhost:3001',
            //   withCredentials : true
            }).get('/streaming/getStreamingList');
          
            return response.data?.firstData; 
          };
          
      
        fetchStreamingList().then((response) => {
          let result = []; 
          for (const data of response) {
            result.push(data);
          }
          setStreamingList(result);
        });
      }, []);
    

      const getCategory = (categoryId) => {
        let result;
        switch(categoryId) {
            case '0':
                result = '게임';
                break;
            case '1':
                result = '일상';
                break;
            case '2':
                result = '스포츠';
                break;
            case '3':
                result = '먹방';
                break;
            case '4':
                result = '요리';
                break;
            case '5':
                result = '교육';
                break;
            default:
                break;
        }
        return result;
      }

      const getStreamingViewPage = async (streamingUserId) => {
        try {
            const response = await axios.get('http://localhost:3001/streaming/getStreamingViewerPage',
                {params : {
                    streamingUserId : streamingUserId
                },
                withCredentials : true
            });

            const firstData = response.data.result;
            if(firstData === 'success') {
                alert('success');
                const streaming = response.data.firstData;
                const serviceUrl = response.data.secondData;
                
                navigate(`/chat/${streamingUserId}`, {
                    state: {
                        streaming : streaming,
                        serviceUrl : serviceUrl
                    }
                });
            }else {
                const firstData = response.data.firstData;
                if(firstData == '1') {
                    alert('로그인이 필요합니다.')
                }else if(firstData == '2') {
                    alert('이미 스트리밍중입니다.')
                }
            }
        } catch (error) {
            alert('[index.jsx getStreamingViewPage] error  = ' + error);
        }
      }      
    // =============================[Code By LDW End]============================= //
    console.log("dark"+isDarkMode);
    return(
        // 메인 전체 div
        <Main_Body>
        
        <Header/>
        <Main_first_div>
            <Main_second_div>
                <Main_third_div>
                    <Main_four_div>
                    {/* 맨위 상단 배너 div */}
                    <Main_stram_div>
                        <Main_stream_second_div>
                            <Main_stream_third_div>
                                <Main_stream_four_div>
                                    <Main_stream_top_h6>Welcome To SSTV</Main_stream_top_h6>
                                    <Main_stream_top_h4><Main_stream_top_em>다양한</Main_stream_top_em> 서비스를 즐겨보세요. 최고의 서비스를 제공합니다. </Main_stream_top_h4>
                                    <Main_stream_butto_div><Main_stream_button_a>Browse Now</Main_stream_button_a></Main_stream_butto_div>
                                </Main_stream_four_div>
                            </Main_stream_third_div>
                        </Main_stream_second_div>
                    </Main_stram_div>
                    {/* 맨위 상단 배너 div */}
                    {/* 홈화면 중단 배너 (스트리밍) */}
                    <Main_stream_body_div>
                        <Main_stream_body_div_2>z``
                            <Main_stream_body_div_3>
                                <Main_stream_body_title_div>
                                    <Main_steram_body_title_h4>
                                        
                                        <Main_stream_body_title_em>실시간</Main_stream_body_title_em> 방송 목록
                                    </Main_steram_body_title_h4>
                                </Main_stream_body_title_div>
                                {/* 방송 목록 메인 div */}
                                 <Main_body_stream_list_div>
                                   {/* 방송 목록 반복 data 들어갈 부분  */}
                                    {streamingList.map((streaming, index) => (
                                        
                                            <Main_stream_list_div>
                                                <label onClick={() => getStreamingViewPage(streaming.userId)}>
                                                <Main_stream_list_div_2>
                                                    <Main_stream_list_img src={streaming.thumnailUrlWithOutAd}/>
                                                    <Main_stream_list_h4 key={index}>{streaming.streamingTitle}
                                                    <Main_stream_list_span>
                                                        {getCategory(streaming.streamingCategory)}
                                                    </Main_stream_list_span> </Main_stream_list_h4>
                                                    <Main_stream_list_watching_ul>
                                                            <Main_stream_list_watching_li_1>
                                                            <FontAwesomeIcon icon={faUserGroup} style={{color: "#0afbff",}} /> {streaming.streamingViewer}
                                                            </Main_stream_list_watching_li_1>
                                                            <Main_stream_list_watching_li_2>
                                                            <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ff0af7",}} /> 2
                                                            </Main_stream_list_watching_li_2>
                                                    </Main_stream_list_watching_ul>
                                                        </Main_stream_list_div_2>
                                                </label>
                                            </Main_stream_list_div>
                                        
                                    ))}
                                    {/* 방송 목록 반복 data 들어갈 부분  */}

                                    {/* 방송 목록 반복 data 들어갈 부분  */}
                                    <Main_stream_list_div>
                                           <Main_stream_list_div_2>
                                               <Main_stream_list_img src='./img/popular-01.jpg'/>
                                               <Main_stream_list_h4>Test Title <Main_stream_list_span>카테고리</Main_stream_list_span> </Main_stream_list_h4>
                                               <Main_stream_list_watching_ul>
                                                    <Main_stream_list_watching_li_1>
                                                    <FontAwesomeIcon icon={faUserGroup} style={{color: "#0afbff",}} /> 4
                                                    </Main_stream_list_watching_li_1>
                                                    <Main_stream_list_watching_li_2>
                                                    <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ff0af7",}} /> 2
                                                    </Main_stream_list_watching_li_2>
                                               </Main_stream_list_watching_ul>
                                                </Main_stream_list_div_2>
                                           </Main_stream_list_div>
                                    {/* 방송 목록 반복 data 들어갈 부분  */}
                                    {/* 방송 목록 반복 data 들어갈 부분  */}
                                    <Main_stream_list_div>
                                           <Main_stream_list_div_2>
                                               <Main_stream_list_img src='./img/popular-01.jpg'/>
                                               <Main_stream_list_h4>Test Title <Main_stream_list_span>카테고리</Main_stream_list_span> </Main_stream_list_h4>
                                               <Main_stream_list_watching_ul>
                                                    <Main_stream_list_watching_li_1>
                                                    <FontAwesomeIcon icon={faUserGroup} style={{color: "#0afbff",}} /> 4
                                                    </Main_stream_list_watching_li_1>
                                                    <Main_stream_list_watching_li_2>
                                                    <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ff0af7",}} /> 2
                                                    </Main_stream_list_watching_li_2>
                                               </Main_stream_list_watching_ul>
                                                </Main_stream_list_div_2>
                                           </Main_stream_list_div>
                                    {/* 방송 목록 반복 data 들어갈 부분  */}
                                    {/* 방송 목록 반복 data 들어갈 부분  */}
                                    <Main_stream_list_div>
                                           <Main_stream_list_div_2>
                                               <Main_stream_list_img src='./img/popular-01.jpg'/>
                                               <Main_stream_list_h4>Test Title <Main_stream_list_span>카테고리</Main_stream_list_span> </Main_stream_list_h4>
                                               <Main_stream_list_watching_ul>
                                                    <Main_stream_list_watching_li_1>
                                                    <FontAwesomeIcon icon={faUserGroup} style={{color: "#0afbff",}} /> 4
                                                    </Main_stream_list_watching_li_1>
                                                    <Main_stream_list_watching_li_2>
                                                    <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ff0af7",}} /> 2
                                                    </Main_stream_list_watching_li_2>
                                               </Main_stream_list_watching_ul>
                                                </Main_stream_list_div_2>
                                           </Main_stream_list_div>
                                    {/* 방송 목록 반복 data 들어갈 부분  */}
                                    {/* 방송 목록 반복 data 들어갈 부분  */}
                                    <Main_stream_list_div>
                                           <Main_stream_list_div_2>
                                               <Main_stream_list_img src='./img/popular-01.jpg'/>
                                               <Main_stream_list_h4>Test Title <Main_stream_list_span>카테고리</Main_stream_list_span> </Main_stream_list_h4>
                                               <Main_stream_list_watching_ul>
                                                    <Main_stream_list_watching_li_1>
                                                    <FontAwesomeIcon icon={faUserGroup} style={{color: "#0afbff",}} /> 4
                                                    </Main_stream_list_watching_li_1>
                                                    <Main_stream_list_watching_li_2>
                                                    <FontAwesomeIcon icon={faThumbsUp} style={{color: "#ff0af7",}} /> 2
                                                    </Main_stream_list_watching_li_2>
                                               </Main_stream_list_watching_ul>
                                                </Main_stream_list_div_2>
                                           </Main_stream_list_div>
                                    {/* 방송 목록 반복 data 들어갈 부분  */}
                              </Main_body_stream_list_div>
                               {/* 방송 목록 메인 div */}

                            </Main_stream_body_div_3>
                        </Main_stream_body_div_2>
                    </Main_stream_body_div>
                    {/* 홈화면 중단 배너 (스트리밍) */}
                    </Main_four_div>
                </Main_third_div>
            </Main_second_div>
        </Main_first_div>
        </Main_Body>
    )
}

export default Mainpage;