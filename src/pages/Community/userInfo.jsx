import React from 'react';
import { User_info_second_div, User_info_full_div, User_info_section, User_info_title_area_div, User_info_title_h4, User_info_title_a, User_info_div_2, User_info_div_button, User_info_div_span, User_info_body_div, User_info_body_div_2, User_info_body_2_button, User_info_body_2_em, User_info_body_2_span } from './style';

const userInfo = () => {

    return(
        <User_info_section>
            <User_info_full_div>
                <User_info_second_div>
                    <User_info_title_area_div>
                        <User_info_title_h4>
                            <User_info_title_a>test</User_info_title_a>
                        </User_info_title_h4>
                        <User_info_div_2>
                            <User_info_div_button>
                                <User_info_div_span></User_info_div_span>
                            </User_info_div_button>
                        </User_info_div_2>
                    </User_info_title_area_div>
                </User_info_second_div>
                <User_info_body_div>
                    <User_info_body_div_2>
                        <User_info_body_2_button>
                            <User_info_body_2_em></User_info_body_2_em>
                            <User_info_body_2_span>30만</User_info_body_2_span>
                        </User_info_body_2_button>
                    </User_info_body_div_2>
                </User_info_body_div>
            </User_info_full_div>
        </User_info_section>
        )

}

export default userInfo;