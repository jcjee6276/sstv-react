import React, {useEffect, useState} from 'react';
import {Main_Body,Main_stream_list_span, Main_stream_list_h4, Main_stream_top_h4, Main_first_div, Main_second_div, Main_stram_div, Main_stream_four_div, Main_stream_second_div, Main_stream_third_div, Main_stream_top_h6, Main_third_div, Main_stream_top_em, Main_stream_butto_div, Main_stream_button_a, Main_stream_body_div, Main_stream_body_div_2, Main_stream_body_div_3, Main_stream_body_title_div, Main_steram_body_title_h4, Main_stream_body_title_em, Main_body_stream_list_div, Main_stream_list_div, Main_stream_list_div_2, Main_stream_list_img, Main_stream_list_watching_ul, Main_stream_list_watching_li_1, Main_stream_list_watching_li_2, Main_four_div, BodyMain, Streaming_Div, Stream_header, Stream_header_span, Stream_header_a, Stream_list_div, Stream_list_div_inner, Stream_ScTower, Stream_ScTransition, Stream_shelf_card, Stream_selector, Stream_article, Stream_Text_area, Stream_image_area, Stream_image_area_inner, Stream_image_a, Stream_image_layout, Stream_image_ScA, Stream_Image_img, Image_div, Live_div, Live_div_inner, Live_p, View_count, View_count_div, Stream_Text_area_inner, Stream_Text_info, Stream_user_image_div, Info_div, Info_Title_a, Streaming_Title_div, Streaming_title_button, Streaming_title_h3, Title_p, Stream_category_p, Streamer_img_a, Streamer_img_div, Streamer_img_inner_div, Streamer_figure, Streamer_img } from './style';
import { faThumbsUp, faUser, faUserGroup, faCheck ,faPencil  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Sidebar from '../Community/sidebar';
import Header from './header';
import axios from 'axios';
import { key } from 'fontawesome';
import LightChatroom from '../Chat/lightChatroom';
import { useNavigate } from 'react-router-dom';
import CenterMode from './centerMode';
import MainSidebar from './mainSidebar';

const Mainpage = () => {
    const navigate = useNavigate();
    const [isDarkMode, setIsDarkMode] = useState(false);
    
    // useEffect(()=> {
    //     return <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
    // },[isDarkMode])

    const [streamingList, setStreamingList] = useState([]);

    const fetchStreamingList = async () => {          
        const response = await axios.create({
          baseURL: `${process.env.REACT_APP_NODE_URL}`,
          withCredentials : true
        }).get('/streaming/getStreamingList');
      
        return response.data?.firstData; 
    };
    
    useEffect(() => {     
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
            case '1':
                result = '게임';
                break;
            case '2':
                result = '일상';
                break;
            case '3':
                result = '스포츠';
                break;
            case '4':
                result = '먹방';
                break;
            case '5':
                result = '요리';
                break;
            case '6':
                result = '교육';
                break;
            default:
                break;
        }
        return result;
      }

      const getStreamingViewPage = async (streamingUserId) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_NODE_URL}/streaming/getStreamingViewerPage`,
                {params : {
                    streamingUserId : streamingUserId
                },
                withCredentials : true
            });

            const firstData = response.data.result;
            if(firstData === 'success') {
                const streaming = response.data.firstData;
                const serviceUrl = response.data.secondData;
                
                navigate(`/chat`, {
                    state: {
                        streaming : streaming,
                        serviceUrl : serviceUrl,
                        streamingUserId : streamingUserId
                    }
                });
            }else {
                const firstData = response.data.firstData;
                if(firstData == '1') {
                    alert('로그인이 필요합니다.')
                }else if(firstData == '2') {
                    alert('해당 스트리머 회원의 블랙리스트에 등록되어있습니다.')
                }
            }
        } catch (error) {
            console.log('[getStreamingViewPage] error = ' + error)
        }
      }      
    
    return(
        // 메인 전체 div
        <Main_Body>
        
        <Header/>
        <BodyMain>
        {streamingList.length > 0 ? (
        <MainSidebar streaming={streamingList}/>
        ): (<div></div>)}
        <Main_first_div>
        <CenterMode/>
            <Main_second_div>
            
                <Main_third_div>
                    {/* <Main_four_div> */}
                    {/* 맨위 상단 배너 div */}
                    
                    {/* <Main_stram_div>
                        <Main_stream_second_div>
                            <Main_stream_third_div>
                                <Main_stream_four_div>
                                    <Main_stream_top_h6>Welcome To SSTV</Main_stream_top_h6>
                                    <Main_stream_top_h4><Main_stream_top_em>다양한</Main_stream_top_em> 서비스를 즐겨보세요. 최고의 서비스를 제공합니다. </Main_stream_top_h4>
                                    <Main_stream_butto_div><Main_stream_button_a>Browse Now</Main_stream_button_a></Main_stream_butto_div>
                                </Main_stream_four_div>
                            </Main_stream_third_div>
                        </Main_stream_second_div>
                    </Main_stram_div> */}
                    {/* 맨위 상단 배너 div */}
                    {/* 홈화면 중단 배너 (스트리밍) */}
                    

                    <Streaming_Div>
                                        <Stream_header>
                                            <Stream_header_span>취향 저격</Stream_header_span>
                                            <Stream_header_a> 생방송 채널</Stream_header_a>
                                        </Stream_header>
                                    </Streaming_Div>




                        {streamingList.map((streaming, index) => (

                            <Stream_list_div onClick={() => getStreamingViewPage(streaming.userId)}>
                                <Stream_list_div_inner>
                                    <Stream_ScTower>
                                        {/* <Stream_ScTransition> */}
                                            <Stream_shelf_card>
                                                <Stream_selector>
                                                    <Stream_article>
                                                        <Stream_Text_area>
                                                            <Stream_Text_area_inner>
                                                                <Stream_Text_info>
                                                                    <Info_div>
                                                                        <Info_Title_a>
                                                                            <Streaming_Title_div>
                                                                                <Streaming_title_button>
                                                                                    <Streaming_title_h3>
                                                                                        {streaming.streamingTitle}
                                                                                    </Streaming_title_h3>
                                                                                </Streaming_title_button>
                                                                            </Streaming_Title_div>
                                                                            <Title_p>
                                                                                {streaming.streamingUserId}
                                                                            </Title_p>
                                                                        </Info_Title_a>
                                                                        <Stream_category_p>{getCategory(streaming.streamingCategory)}</Stream_category_p>
                                                                    </Info_div>
                                                                </Stream_Text_info>

                                                                <Stream_user_image_div>
                                                                    <Streamer_img_a>
                                                                        <Streamer_img_div>
                                                                            <Streamer_img_inner_div/>

                                                                            <Streamer_figure>
                                                                                <Streamer_img src={process.env.REACT_APP_IMAGE_URL+streaming.userId+".jpg"} />
                                                                            </Streamer_figure>

                                                                        </Streamer_img_div>
                                                                    </Streamer_img_a>
                                                                </Stream_user_image_div>

                                                            </Stream_Text_area_inner>
                                                        </Stream_Text_area>




                                                        <Stream_image_area>
                                                            <Stream_image_area_inner>
                                                                <Stream_image_a>
                                                                    <Stream_image_layout>
                                                                        <Stream_image_ScA>
                                                                            <Image_div></Image_div>
                                                                            <Stream_Image_img src={streaming.thumnailUrlWithOutAd} />
                                                                        </Stream_image_ScA>

                                                                        <Live_div>
                                                                            <Live_div_inner>
                                                                                <Live_p>생방송</Live_p>
                                                                            </Live_div_inner>
                                                                        </Live_div>


                                                                        <View_count>
                                                                            <View_count_div>{streaming.streamingViewer}</View_count_div>
                                                                        </View_count>


                                                                    </Stream_image_layout>
                                                                </Stream_image_a>
                                                            </Stream_image_area_inner>
                                                        </Stream_image_area>


                                                    </Stream_article>
                                                </Stream_selector>
                                            </Stream_shelf_card>
                                        {/* </Stream_ScTransition> */}
                                    </Stream_ScTower>
                                </Stream_list_div_inner>
                            </Stream_list_div>

                        ))}


                       {/* 더미데이터 */}
                        {/* 구분 */}
                        <Stream_list_div>
                                <Stream_list_div_inner>
                                    <Stream_ScTower>
                                        {/* <Stream_ScTransition> */}
                                            <Stream_shelf_card>
                                                <Stream_selector>
                                                    <Stream_article>
                                                        <Stream_Text_area>
                                                            <Stream_Text_area_inner>
                                                                <Stream_Text_info>
                                                                    <Info_div>
                                                                        <Info_Title_a>
                                                                            <Streaming_Title_div>
                                                                                <Streaming_title_button>
                                                                                    <Streaming_title_h3>
                                                                                        아침방송
                                                                                    </Streaming_title_h3>
                                                                                </Streaming_title_button>
                                                                            </Streaming_Title_div>
                                                                            <Title_p>
                                                                                심장
                                                                            </Title_p>
                                                                        </Info_Title_a>
                                                                        <Stream_category_p>일상</Stream_category_p>
                                                                    </Info_div>
                                                                </Stream_Text_info>

                                                                <Stream_user_image_div>
                                                                    <Streamer_img_a>
                                                                        <Streamer_img_div>
                                                                            <Streamer_img_inner_div/>

                                                                            <Streamer_figure>
                                                                                <Streamer_img src={process.env.REACT_APP_IMAGE_UR+'/img/base_profile.jpg'} />
                                                                            </Streamer_figure>

                                                                        </Streamer_img_div>
                                                                    </Streamer_img_a>
                                                                </Stream_user_image_div>

                                                            </Stream_Text_area_inner>
                                                        </Stream_Text_area>




                                                        <Stream_image_area>
                                                            <Stream_image_area_inner>
                                                                <Stream_image_a>
                                                                    <Stream_image_layout>
                                                                        <Stream_image_ScA>
                                                                            <Image_div></Image_div>
                                                                            {/* <Stream_Image_img src={streaming.thumnailUrlWithOutAd} /> */}
                                                                        </Stream_image_ScA>

                                                                        <Live_div>
                                                                            <Live_div_inner>
                                                                                <Live_p>생방송</Live_p>
                                                                            </Live_div_inner>
                                                                        </Live_div>


                                                                        <View_count>
                                                                            <View_count_div>78</View_count_div>
                                                                        </View_count>


                                                                    </Stream_image_layout>
                                                                </Stream_image_a>
                                                            </Stream_image_area_inner>
                                                        </Stream_image_area>


                                                    </Stream_article>
                                                </Stream_selector>
                                            </Stream_shelf_card>
                                        {/* </Stream_ScTransition> */}
                                    </Stream_ScTower>
                                </Stream_list_div_inner>
                            </Stream_list_div>

                        {/* 더미데이터 */}
                </Main_third_div>
            </Main_second_div>
        </Main_first_div>
        </BodyMain>
        </Main_Body>
    )
}

export default Mainpage;