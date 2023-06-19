/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import { Head, Head_h2, Layout, Layout_2, Layout_3, Sidebar_category, Sidebar_category_p, Sidebar_content, Sidebar_div, Sidebar_div_content, Sidebar_div_in, Sidebar_inner, Sidebar_layout, Sidebar_main, Sidebar_nav, Sidebar_simple_bar, Sidebar_streamCount_span, Sidebar_stream_a, Sidebar_stream_count, Sidebar_stream_layout, Sidebar_streaming_list, Sidebar_streaming_ls, Sidebar_userId_p, Sidebar_userImage_div, Sidebar_userImage_figure, Sidebar_userImage_img, Sidebar_userInfo, Sidebar_userNickName_div, Sidebar_userNickname, Sidebar_user_span, Sidebar_view, Sidebar_viewIcon, Sidebar_viewLayout } from './barStyle';
import { BodyMain } from './style';
import { useState } from 'react';

const mainSidebar = ({streaming})=>{
    const [streamList, setStreamList] = useState(streaming);
    console.log(streamList)
    
    return(

    <Sidebar_div>
        <Sidebar_inner>
            <Sidebar_main>
                <Sidebar_simple_bar id="scroll">
                    <Sidebar_content>
                        <Sidebar_div_in>
                            <Sidebar_div_content>
                                <Sidebar_nav>
                                    <Sidebar_layout>
                                        <Layout>
                                            <Layout_2>
                                                <Layout_3>
                                                    <Head>
                                                        <Head_h2>
                                                            스트리밍 중인 채널
                                                        </Head_h2>
                                                    </Head>
                                                </Layout_3>
                                            </Layout_2>
                                        </Layout>
                                    </Sidebar_layout>
                                </Sidebar_nav>
                            </Sidebar_div_content>


                            {streamList.map((stream, index)=>{

                            return(
                            <Sidebar_streaming_list>
                                <Sidebar_streaming_ls>
                                    <Sidebar_stream_layout>
                                        <Sidebar_stream_a>

                                        <Sidebar_userImage_div>
                                            <Sidebar_userImage_figure>
                                                <Sidebar_userImage_img src={process.env.REACT_APP_IMAGE_URL+stream.userId+".jpg"}/>
                                            </Sidebar_userImage_figure>
                                        </Sidebar_userImage_div>

                                        <Sidebar_userNickname>
                                            <Sidebar_userInfo>
                                                <Sidebar_userNickName_div>
                                                    <Sidebar_userId_p>
                                                        <Sidebar_user_span>{stream.userId}</Sidebar_user_span>
                                                    </Sidebar_userId_p>
                                                </Sidebar_userNickName_div>

                                                <Sidebar_category>
                                            <Sidebar_category_p>
                                                {stream.streamingTitle}
                                            </Sidebar_category_p>
                                        </Sidebar_category>

                                            </Sidebar_userInfo>
                                        </Sidebar_userNickname>

                                        <Sidebar_view>
                                            <Sidebar_viewLayout>
                                                <Sidebar_viewIcon></Sidebar_viewIcon>
                                                <Sidebar_stream_count>
                                                    <Sidebar_streamCount_span>{stream.streamingViewer}</Sidebar_streamCount_span>
                                                </Sidebar_stream_count>
                                            </Sidebar_viewLayout>
                                        </Sidebar_view>

                                        </Sidebar_stream_a>
                                    </Sidebar_stream_layout>
                                </Sidebar_streaming_ls>
                            </Sidebar_streaming_list>
                            )
                            })}
                            


                        </Sidebar_div_in>
                    </Sidebar_content>
                </Sidebar_simple_bar>
            </Sidebar_main>
        </Sidebar_inner>
    </Sidebar_div>
    
    )
}

export default mainSidebar;