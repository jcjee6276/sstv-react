import styled from "styled-components";

export const CBody = styled.body`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
background-color: #fff;
color: #555;
font-size: 12px;
line-height: 1.2;
`;

export const MainDiv = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const CHeader = styled.header`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
left: 0;
right: 0;
background: #fff;
width: 100%;
min-width: 1184px;
border-bottom: 1px solid #f0f0f0;
z-index: 999;
position: fixed;
top: 0px;
`;

export const CHeader_Dark = styled.header`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
left: 0;
right: 0;
background: #fff;
width: 100%;
min-width: 1184px;
border-bottom: 1px solid #f0f0f0;
z-index: 999;
position: fixed;
top: 0px;
backgroundcolor: black;
`;

export const HeaderDiv = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 1184px;
height: 66px;
margin: 0 auto;
`;

export const Com_h1 = styled.h1`
color: #555;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 0;
left: 0;
z-index: 2000;
`;

export const Header_a = styled.a`
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
text-decoration: none;
display: block;
background-size: 136px 23px;
width: 136px;
height: 65px;
font: 0/0 a;
`;

export const Header_Search_Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 12px;
left: 156px;
`;


export const Header_Search_form = styled.form`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Header_Search_fieldset = styled.fieldset`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Header_Search_Div_input = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Header_Search_Div_input_in = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
position: relative;
`;

export const Header_Search_Input_in = styled.input`
margin: 0;
font-family: inherit;
outline: none;
-webkit-appearance: none;
width: 280px;
height: 40px;
padding: 0 42px 0 12px;
border: 1px solid #ddd;
border-radius: 3px;
box-sizing: border-box;
color: #000;
line-height: 40px;
font-size: 14px;
transition: all .2s ease;
`;

export const Header_Search_Button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
overflow: visible;
color: transparent;
position: absolute;
top: 1px;
right: 1px;
width: 42px;
height: 38px;
`;

export const Header_Search_Span = styled.span`
cursor: pointer;
color: transparent;
margin: 0;
padding: 0;
border: 0;
position: relative;
display: inline-block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(255,255,255,0.999)' stroke='%23666' viewBox='0 0 21 21'%3e%3cpath stroke-width='2' fill='none' d='M8.297 1c4.03 0 7.297 3.267 7.297 7.297 0 4.03-3.267 7.297-7.297 7.297C4.267 15.594 1 12.327 1 8.297 1 4.267 4.267 1 8.297 1z'/%3e%3cpath stroke-width='2' d='M13.865 13.864l6.34 6.341'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 18px;
height: 18px;
font: 0/0 a;
vertical-align: middle;
`;

export const Header_Search_Side_Button = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
float: left;
height: 40px;
margin-left: 8px;
padding: 0 12px;
border: 1px solid #ddd;
border-radius: 3px;
color: #555;
font-size: 13px;
line-height: 38px;
`;

export const Header_Search_Side_Span = styled.span`
cursor: pointer;
color: #555;
font-size: 13px;
line-height: 38px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Header_legend = styled.legend`
color: #555;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
overflow: hidden;
position: absolute;
top: -9999px;
left: -9999px;
width: 1px;
height: 1px;
line-height: 0;
font-size: 0;
text-indent: -9999px;
`;

export const Header_Right_Side_Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 15px;
right: 0;
`;

export const Header_Right_Icon_1_Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
margin-right: 15px;
position: relative;
`;

export const Header_Right_Icon_1_a = styled.a`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
`;

export const Header_Right_Icon_1_Button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
position: relative;
overflow: visible;
color: transparent;
display: block;
width: 35px;
height: 35px;
text-align: center;
`;

export const Header_right_Icon_1_Span = styled.span`
cursor: pointer;
color: transparent;
text-align: center;
margin: 0;
padding: 0;
border: 0;
position: relative;
display: inline-block;
font: 0/0 a;
vertical-align: middle;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(106,106,106,0.999)' stroke='' viewBox='0 0 21 19'%3e%3cpath fill-rule='evenodd' d='M17 15v4h-1v-4h-4v-1h4v-4h1v4h4v1h-4zm-7.49-2.15a1.2 1.2 0 01-1.03-.59 1.39 1.39 0 01-.22-.75V6.25c0-.74.56-1.33 1.25-1.33.27 0 .53.09.74.26l3.38 2.62a1.4 1.4 0 010 2.16l-3.39 2.63c-.21.17-.47.26-.73.26zm3.6-3.8a.32.32 0 00-.06-.42L9.66 6.01a.24.24 0 00-.15-.06c-.15 0-.27.14-.27.3v5.26c0 .07.02.13.05.18.04.06.1.1.18.12h.04c.05 0 .1-.02.15-.05l3.4-2.63a.33.33 0 00.05-.08zM20 4.84A3.84 3.84 0 0016.16 1H4.84A3.84 3.84 0 001 4.84v8.32A3.84 3.84 0 004.84 17h6.24c.12.35.28.68.47 1H4.84A4.84 4.84 0 010 13.16V4.84A4.84 4.84 0 014.84 0h11.32A4.84 4.84 0 0121 4.84v6.9c-.29-.38-.62-.74-1-1.05V4.84z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 21px;
height: 19px;
`;

export const Header_Right_Icon_2_Button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
position: relative;
overflow: visible;
color: transparent;
float: left;
margin-right: 15px;
display: block;
width: 35px;
height: 35px;
text-align: center;
`;

export const Header_Right_Icon_2_Span = styled.span`
cursor: pointer;
color: transparent;
text-align: center;
margin: 0;
padding: 0;
border: 0;
position: relative;
display: inline-block;
font: 0/0 a;
vertical-align: middle;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(102,102,102,0.999)' stroke='' viewBox='0 0 28 18'%3e%3cpath fill-rule='evenodd' d='M27.305 15.631c-.189.099-.397.149-.603.149-.259 0-.516-.077-.737-.23l-5.325-3.677v2.279c0 2.122-1.724 3.848-3.843 3.848H3.844C1.725 18 .001 16.274.001 14.152V3.848C.001 1.726 1.725 0 3.844 0h12.953c2.119 0 3.843 1.726 3.843 3.848v2.345l5.301-3.741c.223-.158.485-.238.748-.238.203 0 .408.048.596.146.43.222.7.667.701 1.152l.013 10.968c.001.482-.267.926-.694 1.151zm-.32-12.118c0-.112-.061-.214-.16-.265-.044-.023-.089-.034-.136-.034-.043 0-.108.01-.171.054L21.217 7.01c-.172.122-.374.183-.577.183-.158 0-.315-.037-.46-.112-.332-.171-.541-.514-.541-.888V3.848C19.639 2.277 18.364 1 16.797 1H3.844C2.277 1 1.001 2.277 1.001 3.848v10.304c0 1.57 1.276 2.848 2.843 2.848h12.953c1.567 0 2.842-1.278 2.842-2.848v-2.279c0-.371.207-.712.536-.885.146-.077.306-.115.465-.115.199 0 .398.06.568.178l5.326 3.677c.062.043.126.052.168.052.048 0 .094-.012.137-.034.099-.052.16-.153.159-.265l-.013-10.968zM13.55 10.807c-.994 0-1.799-.809-1.799-1.799 0-.998.805-1.807 1.799-1.807.986 0 1.792.809 1.792 1.807 0 .99-.806 1.799-1.792 1.799zm-6.323 0c-.995 0-1.8-.809-1.8-1.799 0-.998.805-1.807 1.8-1.807.986 0 1.791.809 1.791 1.807 0 .99-.805 1.799-1.791 1.799z'/%3e%3c/svg%3e") center 0 no-repeat;
background-size: 100% 100%;
width: 28px;
height: 18px;
`;

export const Header_Right_Login_Ui_Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
align-items: center;
float: left;
position: relative;
margin-right: 0;
`;

export const Header_Right_Login_Ui_Span = styled.span`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
`;

export const Header_Right_Login_Ui_Button = styled.button`
margin: 0;
cursor: pointer;
overflow: visible;
color: transparent;
position: relative;
top: 0;
right: 0;
vertical-align: middle;
background: url("data:image/svg+xml,%3csvg viewBox='0 0 3 15' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m1.5 9c-0.829 0-1.5-0.672-1.5-1.5-0-0.829 0.671-1.5 1.5-1.5 0.828 0 1.5 0.671 1.5 1.5 0 0.828-0.672 1.5-1.5 1.5zm0-6c-0.829 0-1.5-0.672-1.5-1.5-0-0.829 0.671-1.5 1.5-1.5 0.828-0 1.5 0.671 1.5 1.5 0 0.828-0.672 1.5-1.5 1.5zm0 9c0.828 0 1.5 0.671 1.5 1.5 0 0.828-0.672 1.5-1.5 1.5-0.829 0-1.5-0.672-1.5-1.5-0-0.829 0.671-1.5 1.5-1.5z' fill='%23666'/%3e%3c/svg%3e") 50% 50% no-repeat;
background-size: 3px 15px;
width: 35px;
height: 25px;
margin-right: 10px;
padding: 0;
border: 0;
font: 0/0 a;
outline: none;
`;


export const Header_Right_Login_Ui_a = styled.a`
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
display: inline-block;
height: 35px;
color: #666;
line-height: 35px;
font-size: 14px;
font-weight: bold;
`;

export const Header_Modal_Div = styled.div`
color: #555;
font-size: 12px;
margin: 0;
padding: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
background: #fff;
width: 182px;
border: solid 1px #bfbfbf;
border-radius: 5px;
box-sizing: border-box;
z-index: 10;
line-height: 1.2;
top: 39px;
right: 40px;
position: absolute;
`;


export const Header_Modal_Div_Set = styled.div`
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
overflow: hidden;
position: relative;
padding: 12px 18px 15px 17px;
border-bottom: 1px solid #ebebeb;
color: #555;
`;

export const Header_Modal_Strong_mode = styled.strong`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
align-items: center;
color: #555;
font-size: 12px;
font-weight: normal;
padding-left: 24px;
text-align: left;
`;


export const Header_Modal_Label = styled.label`
font-size: 12px;
line-height: 1.2;
color: #555;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 15px;
right: 13px;
background: #c8c8c8;
width: 22px;
height: 8px;
border-radius: 10px;
cursor: pointer;
`;

export const Sidebar_Main_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 1184px;
margin: 0 auto;
padding: 65px 0 90px;
z-index: 11;
`;

export const Sidebar_Div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 65px;
bottom: 0;
background: #f8fafc;
width: 251px;
height: 1000px;
border-right: 1px solid #f0f0f0;
z-index: 11;
`;

export const Sidebar_Div_in = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
background: #f8fafc;
height: 100%;
padding-bottom: 80px;
`;

export const Sidebar_Article_Class = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin-left: 30px;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
width: 191px;
padding: 0 px;
z-index: 10;
`;

export const Sidebar_Section_Class = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
padding: 24px 0 0;
`;

export const Sidebar_User_a = styled.a`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
`;

export const Sidebar_a_in_div =styled.div`
font-size: 12px;
line-height: 1.2;
color: inherit;
padding: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
width: 83px;
height: 83px;
margin: 0 auto;
border: 1px solid #e1e1e1;
border-radius: 50%;
`;

export const Sidebar_Profile = styled.img`
font-size: 12px;
line-height: 1.2;
color: inherit;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
width: 83px;
height: 83px;
border-radius: 50%;
`;

export const Sidebar_User_info = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-top: 8px;
text-align: center;
`;

export const Sidebar_User_name_idv = styled.div`
color: #555;
font-size: 12px;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
line-height: 1.2;
`;

export  const Sidebar_User_name_h2 = styled.h2`
text-align: center;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: inline-block;
overflow: hidden;
text-overflow: ellipsis;
max-width: 191px;
margin: 0 1px;
white-space: nowrap;
color: #000;
font-size: 15px;
font-weight: bold;
line-height: 1.2;
vertical-align: middle;
`;

export const Sidebar_User_id_span = styled.span`
text-align: center;
line-height: 1.2;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: inline-block;
margin: 0 1px;
color: #aaa;
font-size: 12px;
vertical-align: middle;
`;

export const Sidebar_User_badge_Div = styled.div`
color: #555;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-top: 9px;
font-size: 0;
line-height: 0;
`;

export const Sidebar_User_badge_i = styled.i`
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
text-decoration: none;
display: inline-block;
background: #555;
height: 21px;
margin: 6px 3px 0 3px;
padding: 0 12px;
border-radius: 30px;
color: #fff;
font-size: 11px;
font-weight: bold;
line-height: 21px;
text-align: center;
background-color: rgb(40, 191, 255);
`;

export const Sidebar_Body_article = styled.article`
    color: #555;
    font-size: 12px;
    line-height: 1.2;
    margin: 0;
    border: 0;
    font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
    vertical-align: baseline;
    display: block;
    position: relative;
    width: 180px;
    padding: 0 35px 0 36px;
    z-index: 5;
`;

export const Sidebar_Body_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-top: 20px;
`;


export const Sidebar_Body_Streaming = styled.a`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
overflow: hidden;
display: block;
position: relative;
background: #000;
height: 100px;
border-radius: 10px;
`;

export const Sidebar_Body_image_span = styled.span`
color: inherit;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
font: 0/0 a;
opacity: .7;
z-index: 1;
`;

export const Sidebar_Body_image_thumb = styled.span`
color: inherit;
font: 0/0 a;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
background-color: #f3f3f3;
width: 100%;
padding-bottom: calc(100% / 16 * 9);
font-size: 0;
line-height: 0;
`;


export const Sidebar_Body_image_Head = styled.div`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
left: 10px;
right: 10px;
color: #fff;
z-index: 3;
top: 10px;
`;

export const Sidebar_Body_image_span_live = styled.span`
font-size: 12px;
line-height: 1.2;
color: #fff;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
position: relative;
padding-left: 10px;
font-weight: bold;
`;

export const Sidebar_Body_image_span_views = styled.span`
font-size: 12px;
line-height: 1.2;
color: #fff;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-left: 12px;
padding-left: 20px;
`;

export const Sidebar_p = styled.p`
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
left: 10px;
right: 10px;
color: #fff;
z-index: 3;
bottom: 10px;
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
font-weight: bold;
`;

export const Sidebar_Writing_Button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
display: block;
position: relative;
width: 100%;
height: 44px;
margin-top: 20px;
border-radius: 4px;
border: 1px solid #4279ff;
color: #4279ff;
line-height: 42px;
text-align: center;
`;

export const Sidebar_Writing_Span = styled.span`
cursor: pointer;
color: #4279ff;
line-height: 42px;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
position: relative;
padding-left: 5px;
font-size: 15px;
font-weight: bold;
`;

export const Sidebar_footer_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
width: 180px;
padding: 0 35px 0 36px;
position: sticky;
top: 60px;
z-index: 4;
`;

export const Sidebar_footer_VOD_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
width: 180px;
margin: 0 auto -1px;
padding: 20px 0;
border: 1px solid #e1e4e6;
border-width: 0 0 1px;
transition: all .2s ease;
`;

export const Sidebar_footer_VOD_h3 = styled.h3`
color: #555;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Sidebar_footer_VOD_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
display: block;
position: relative;
width: 100%;
color: #000;
font-size: 16px;
font-weight: bold;
text-align: left;
transition: all .2s ease;
height: 26px;
margin-bottom: 9px;
line-height: 26px;
`;

export const Sidebar_footer_VOD_span = styled.span`
cursor: pointer;
color: #000;
font-size: 16px;
font-weight: bold;
text-align: left;
line-height: 26px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Sidebar_footer_VOD_li_ul = styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
top: -9999em;
transition: all .1s ease;
position: static;
opacity: 1;
visibility: visible;
`;

export const Sidebar_footer_VOD_li_1 = styled.li`
color: #555;
font-size: 12px;
line-height: 1.2;
visibility: visible;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
position: relative;
background: none;
margin-bottom: 0;
padding-bottom: 0;
`;


export const Sidebar_footer_VOD_1_a = styled.a`
line-height: 1.2;
visibility: visible;
list-style: none;
margin: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
display: block;
overflow: hidden;
padding: 6px 0 6px 8px;
border-radius: 3px;
text-overflow: ellipsis;
font-size: 13px;
word-break: break-all;
white-space: nowrap;
`;

export const Sidebar_footer_Writing_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
width: 180px;
margin: 0 auto -1px;
padding: 20px 0;
border: 1px solid #e1e4e6;
border-width: 0 0 1px;
transition: all .2s ease;
`;


export const Sidebar_footer_Writing_h3 = styled.h3`
color: #555;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;


export const Sidebar_footer_Writing_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
display: block;
position: relative;
width: 100%;
color: #000;
font-size: 16px;
font-weight: bold;
text-align: left;
transition: all .2s ease;
height: 26px;
margin-bottom: 9px;
line-height: 26px;
`;

export const Sidebar_footer_Writing_span = styled.span`
cursor: pointer;
color: #000;
font-size: 16px;
font-weight: bold;
text-align: left;
line-height: 26px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Sidebar_footer_Writing_ul_a = styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
top: -9999em;
transition: all .1s ease;
position: static;
opacity: 1;
visibility: visible;
`;

export const Sidebar_footer_Writing_li_1 = styled.li`
color: #555;
font-size: 12px;
line-height: 1.2;
visibility: visible;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
position: relative;
background: url(/images/bj/bg_dot_lnb.png) 0 100% repeat-x;
margin-bottom: 8px;
padding-bottom: 8px;
`;

export const Sidebar_footer_Writing_1_a = styled.a`
line-height: 1.2;
visibility: visible;
list-style: none;
margin: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
display: block;
overflow: hidden;
padding: 6px 0 6px 8px;
border-radius: 3px;
text-overflow: ellipsis;
font-size: 13px;
word-break: break-all;
white-space: nowrap;
background: #e6edfb;
color: #000;
font-weight: bold;
`;

export const Sidebar_footer_Writing_strong = styled.strong`
line-height: 1.2;
visibility: visible;
list-style: none;
font-size: 13px;
word-break: break-all;
white-space: nowrap;
color: #000;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_form_Main_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 932px;
min-height: 900px;
margin-left: 252px;
padding: 0 0 0 0;
z-index: 4;
`;

export const Writing_form_Body_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding: 25px 0 0 48px;
transition: all .2s ease;
z-index: 10;
margin-top: 62px;
`;

export const Writing_form_Body_div1 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_form_Body_div2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_form_Body_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Writing_form_Body_form_1 = styled.form`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export  const Writing_form_Body_form_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
padding-bottom: 14px;
z-index: 5;
`;

export const Writing_form_Body_form_div2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_form_Body_title_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
position: relative;
background: #fff;
z-index: 10;
transition: all .2s ease;
max-width: calc(100% - 100px);
`;

export const Writing_form_Body_title_span = styled.span`
cursor: pointer;
color: #333;
line-height: 36px;
text-align: left;
font-size: 16px;
font-weight: bold;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
display: inline-block;
overflow: hidden;
max-width: 630px;
text-overflow: ellipsis;
white-space: nowrap;
`;

export const Writing_form_Body_title_Button = styled.div`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
display: block;
position: relative;
width: 100%;
height: 36px;
border-radius: 2px;
color: #333;
line-height: 36px;
box-sizing: border-box;
text-align: left;
padding: 0 34px 0 0;
border: 0;
font-size: 16px;
font-weight: bold;
`;


export const Writing_form_Body_title_text_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
z-index: 4;
`;

export const Writing_form_Body_title_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
padding-bottom: 18px;
border-bottom: 1px solid #d9dddf;
`;

export const Writing_form_Body_title_textarea = styled.textarea`
font-family: inherit;
text-decoration: none;
width: 100%;
overflow: hidden;
min-height: 32px;
margin: 0;
padding: 0;
border: 0;
color: #000;
font-size: 28px;
word-break: break-word;
word-wrap: break-word;
white-space: pre-wrap;
cursor: text;
resize: none;
outline: none;
height: 32px;
`;

export const Writing_form_Body_edit_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-top: 29px;
border: 1px solid #ddd;
`;

export const Writing_footer_alarm_ul =styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding-top: 50px;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
margin-top: 27px;
`;

export const Writing_footer_alarm_li_1 = styled.li`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
position: relative;
padding-left: 8px;
color: #888;
font-size: 13px;
line-height: 27px;
`;

export const Writing_footer_alarm_li_2 = styled.li`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
position: relative;
padding-left: 8px;
color: #888;
font-size: 13px;
line-height: 27px;
`;

export const Writing_footer_submit_div = styled.div`
color: #555;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font: 0/0 a;
margin-top: 35px;
padding-top: 16px;
border-top: 1px solid #eee;
`;

export const Writing_footer_submit_sdiv = styled.div`
color: #555;
font: 0/0 a;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: right;
position: relative;
text-align: right;
`;

export const Writing_footer_cancle_button = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
padding: 0 16px;
min-width: 60px;
height: 36px;
border: 1px solid #d9dddf;
border-radius: 3px;
color: #333;
font-size: 13px;
line-height: 34px;
text-align: center;
transition: all .2s ease;
margin-left: 0;
`;

export const Writing_footer_submnit_button = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
padding: 0 16px;
min-width: 60px;
height: 36px;
border: 1px solid #d9dddf;
border-radius: 3px;
font-size: 13px;
line-height: 34px;
text-align: center;
transition: all .2s ease;
border-color: #4279ff;
color: #4279ff;
font-weight: bold;
margin-left: 8px;
`;

export const Writing_footer_cancle_span = styled.span`
cursor: pointer;
color: #333;
font-size: 13px;
line-height: 34px;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Writing_footer_submit_span = styled.span`
cursor: pointer;
font-size: 13px;
line-height: 34px;
text-align: center;
color: #4279ff;
font-weight: bold;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
padding-left: 10px;
`;

export const Writing_List_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding: 25px 0 0 48px;
transition: all .2s ease;
z-index: 10;
margin-top: 62px;
`;


export const Writing_List_bs_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
min-height: 0px;
`;

export const Writing_List_bs_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_bs_title = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_bs_h2 = styled.h2`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
color: #000;
font-size: 28px;
font-weight: normal;
word-break: break-all;
`;

export const Writing_List_bs_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding-top: 20px;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin-top: 20px;
padding-bottom: 50px;
border-bottom: 1px solid #d9dddf;
`;

export const Writing_List_bs_span = styled.span`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
align-items: center;
float: left;
padding-top: 10px;
color: #666;
font-size: 13px;
`;

export const Writing_List_bs_em = styled.em`
line-height: 1.2;
font-size: 13px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
color: #4279ff;
`;

export const Writing_List_bs_button_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: right;
`;

export const Writing_List_bs_button_a =styled.a`
margin: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
padding: 0 16px;
min-width: 60px;
height: 36px;
border: 1px solid #d9dddf;
border-radius: 3px;
color: #333;
font-size: 13px;
text-align: center;
transition: all .2s ease;
display: inline-block;
line-height: 36px;
box-sizing: border-box;
float: left;
margin-left: 8px;
`;

export const Writing_List_bs_button_span = styled.span`
color: #333;
font-size: 13px;
text-align: center;
line-height: 36px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
padding-left: 10px;
font-weight: bold;
`;

export const Writing_List_title_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;


export const Writing_List_title_section_2 = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin-top: -1px;
border-top: 1px solid #d9dddf;
`;

export const Writing_List_title_table = styled.table`
color: #555;
font-size: 12px;
line-height: 1.2;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
border-collapse: collapse;
table-layout: fixed;
word-break: break-all;
width: 100%;
border-bottom: 1px solid #eee;
`;

export const Writing_List_title_thead = styled.thead`
color: #555;
font-size: 12px;
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_title_tr = styled.tr`
color: #555;
font-size: 12px;
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_title_th_1 = styled.th`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-size: 13px;
vertical-align: middle;
height: 44px;
width: 508px;
color: #555;
`;

export const Writing_List_title_th_2 = styled.th`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-size: 13px;
vertical-align: middle;
height: 44px;
width: 120px;
color: #555;
position: relative;
padding-left: 8px;
text-align: left;
`;

export const Writing_List_title_th_3 = styled.th`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-size: 13px;
vertical-align: middle;
height: 44px;
color: #555;
`;

export const Writing_List_title_th_4 = styled.th`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-size: 13px;
vertical-align: middle;
height: 44px;
color: #555;
`;

export const Writing_List_title_th_5 = styled.th`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
font-size: 13px;
vertical-align: middle;
height: 44px;
color: #555;
`;

export const Writing_List_tbody = styled.tbody`
color: #555;
font-size: 12px;
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_tbody_tr = styled.tr`
color: #555;
font-size: 12px;
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
-webkit-animation: left_AC 0.4s ease;
`;

export const Writing_List_tbody_td = styled.td`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
color: #666;
vertical-align: middle;
height: 34px;
padding: 5px 0;
border-top: 1px solid #eee;
text-align: center;
font-size: 13px;
padding-left: 16px;
overflow: hidden;
`;

export const Writing_List_tbody_div_1 = styled.div`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
color: #666;
text-align: center;
font-size: 13px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: table-cell;
vertical-align: middle;
width: 88px;
padding-right: 8px;
`;

export const Writing_List_tbody_1_span = styled.span`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
overflow: hidden;
width: 88px;
color: #aaa;
text-align: left;
text-overflow: ellipsis;
font-size: 12px;
white-space: nowrap;
`;

export const Writing_List_tbody_2_div = styled.div`
border-collapse: collapse;
word-break: break-all;
color: #666;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: table-cell;
vertical-align: middle;
line-height: 0;
text-align: left;
font-size: 0;
word-wrap: break-word;
max-width: 400px;
`;

export const Writing_List_tbody_2_a = styled.a`
border-collapse: collapse;
text-align: left;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
display: inline;
color: #333;
line-height: 1.3;
font-size: 14px;
word-break: break-word;
word-wrap: break-word;
`;

export const Writing_List_tbody_2_span = styled.span`
border-collapse: collapse;
word-break: break-all;
text-align: left;
word-wrap: break-word;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
margin-left: 8px;
color: #4b80ff;
font-size: 14px;
font-weight: bold;
line-height: 1.2;
`;

export const Writing_List_tbody_td_2 = styled.td`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
color: #666;
vertical-align: middle;
height: 34px;
padding: 5px 0;
border-top: 1px solid #eee;
font-size: 13px;
position: relative;
padding-left: 8px;
text-align: left;
`;

export const Writing_List_tbody_td_2_a =styled.a`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-size: 13px;
text-align: left;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
`;

export const Writing_List_tbody_td_3 = styled.td`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
color: #666;
vertical-align: middle;
height: 34px;
padding: 5px 0;
border-top: 1px solid #eee;
text-align: center;
font-size: 13px;
`;

export const Writing_List_tbody_td_4 = styled.td`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
color: #666;
vertical-align: middle;
height: 34px;
padding: 5px 0;
border-top: 1px solid #eee;
text-align: center;
font-size: 13px;
`;

export const Writing_List_tbody_td_5 = styled.td`
line-height: 1.2;
border-collapse: collapse;
word-break: break-all;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
color: #666;
vertical-align: middle;
height: 34px;
padding: 5px 0;
border-top: 1px solid #eee;
text-align: center;
font-size: 13px;
`;

export const Writing_List_footer_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_footer_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
padding: 24px 0 60px;
`;

export const Writing_List_footer_form = styled.form`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_List_footer_search_div = styled.div`
color: #555;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
text-align: center;
font-size: 0;
line-height: 0;
margin-top: 28px;
`;

export const Writing_List_footer_search_div_1 = styled.div`
color: #555;
text-align: center;
font-size: 0;
line-height: 0;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline-block;
position: relative;
background: #fff;
z-index: 10;
transition: all .2s ease;
`;

export const Writing_List_footer_search_button = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
display: block;
position: relative;
width: 100%;
height: 36px;
padding: 0 10px 0 12px;
border: 1px solid #d9dddf;
border-radius: 2px;
color: #333;
font-size: 13px;
line-height: 36px;
box-sizing: border-box;
text-align: left;
`;

export const Writing_List_footer_search_span = styled.span`
cursor: pointer;
color: #333;
font-size: 13px;
line-height: 36px;
text-align: left;
margin: 0;
padding-right: 20px;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Writing_List_footer_search_input_div = styled.div`
color: #555;
text-align: center;
font-size: 0;
line-height: 0;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: inline-block;
position: relative;
margin-left: 4px;
vertical-align: -13px;
`;

export const Writing_List_footer_search_input = styled.input`
margin: 0;
font-family: inherit;
-webkit-appearance: none;
float: left;
width: 186px;
height: 34px;
padding: 0 2px 0 12px;
border: 1px solid #d9dddf;
border-radius: 2px;
color: #000;
font-size: 13px;
line-height: 34px;
outline: none;
`;

export const Writing_List_footer_search_button_ui = styled.button`
margin: 0;
vertical-align: top;
cursor: pointer;
font-family: inherit;
float: left;
background: #fff;
height: 36px;
margin-left: -3px;
padding: 0 15px;
border: 1px solid #4279ff;
border-radius: 2px;
color: #4279ff;
font-size: 13px;
text-align: center;
line-height: 34px;
outline: none;
transition: all .2s ease;
`;

export const Writing_List_footer_search_button_span = styled.span`
cursor: pointer;
color: #4279ff;
font-size: 13px;
text-align: center;
line-height: 34px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Writing_get_bs_contents_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
width: 932px;
min-height: 900px;
margin-left: 252px;
padding: 0 0 0 0;
z-index: 4;
`;

export const Writing_get_bs_contents_article = styled.article`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding: 25px 0 0 48px;
transition: all .2s ease;
z-index: 10;
margin-top: 62px;
`;

export const Writing_get_bs_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
min-height: 0px;
`;

export const Writing_get_bs_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_get_bs_div_3 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
min-height: 0px;
`;

export const Writing_get_bs_div_4 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_get_bs_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Writing_get_bs_header_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding: 21px 0 16px;
border-bottom: 1px solid #eee;
`;

export const Writing_get_bs_header_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_get_bs_header_a = styled.a`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
text-decoration: none;
display: inline-block;
margin-bottom: 18px;
color: #888;
font-size: 16px;
`;

export const Writing_get_bs_header_h2 = styled.h2`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: #000;
font-size: 26px;
font-weight: bold;
word-break: break-word;
font-family: "NGBS", applegothic;
word-wrap: break-word;
overflow: hidden;
`;

export const Writing_get_bs_header_user_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
position: relative;
margin-top: 16px;
`;

export const Writing_get_bs_header_user_img_div = styled.div`
color: #555;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
flex: 1 0 auto;
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
width: 40px;
height: 40px;
border-radius: 50%;
text-align: left;
font: 0/0 a;
cursor: pointer;
`;

export const Writing_get_bs_header_user_img = styled.img`
color: #555;
text-align: left;
font: 0/0 a;
cursor: pointer;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
width: 40px;
height: 40px;
border-radius: 50%;
`;

export const Writing_get_bs_header_user_box_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: flex;
align-items: center;
flex: 0 1 auto;
position: relative;
width: 100%;
padding-left: 11px;
vertical-align: middle;
`;

export const Writing_get_bs_header_user_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
line-height: 1.2;
color: #333;
font-size: 14px;
font-weight: bold;
font-family: "NGBS", verdana, applegothic, sans-serif;
`;

export const Writing_get_bs_header_user_p = styled.p`
cursor: pointer;
line-height: 1.2;
color: #333;
font-size: 14px;
font-weight: bold;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
position: relative;
font-family: "NG";
`;

export const Writing_get_bs_header_user_em = styled.em`
cursor: pointer;
line-height: 1.2;
font-size: 14px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
color: #aaa;
`;

export const Writing_get_bs_header_user_date_span = styled.span`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
line-height: 1.2;
position: relative;
margin-left: 20px;
color: #666;
font-size: 14px;
`;

export const Writing_get_bs_header_user_query_span = styled.span`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
line-height: 1.2;
position: relative;
margin-left: 20px;
color: #666;
font-size: 14px;
`;
export const Writing_get_bs_header_user_query_em = styled.em`
line-height: 1.2;
font-size: 14px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
margin-right: 4px;
color: #aaa;
`;


export const Writing_get_bs_header_user_right_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
transition: all .2s ease;
position: absolute;
bottom: 20px;
right: 0;
width: 32px;
height: 32px;
opacity: 1;
visibility: visible;
`;

export const Writing_get_header_right_button_span = styled.span`
cursor: pointer;
visibility: visible;
padding: 0;
border: 0;
vertical-align: baseline;
position: relative;
display: block;
font: 0/0 a;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(170,170,170,0.999)' stroke='' viewBox='0 0 4 20'%3e%3cpath d='M2 12c-1.105 0-2-.896-2-2 0-1.105.895-2 2-2 1.104 0 2 .895 2 2 0 1.104-.896 2-2 2zm0-8C.895 4 0 3.105 0 2s.895-2 2-2c1.104 0 2 .895 2 2s-.896 2-2 2zm0 12c1.104 0 2 .895 2 2 0 1.104-.896 2-2 2-1.105 0-2-.896-2-2 0-1.105.895-2 2-2z'/%3e%3c/svg%3e") 0 0 no-repeat;
margin: 0 auto;
width: 4px;
height: 20px;
`;

export const Writing_get_body_main_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin-bottom: 16px;
padding: 37px 0 40px 0;
border-bottom: 1px solid #eee;
`;

export const Writing_get_body_main_div = styled.div`
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
overflow: hidden;
color: #000;
font-size: 15px;
word-wrap: break-word;
word-break: break-word;
line-height: 1.6;
transform: translate3d(0, 0, 0);
`;

export const Writing_get_body_main_p = styled.p`
color: #000;
font-size: 15px;
word-wrap: break-word;
word-break: break-word;
line-height: 1.6;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font-family: inherit;
`;

export const Writing_get_body_listbutton_div = styled.div`
color: #555;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
font: 0/0 a;
`;

export const Writing_get_body_listbutton_div_2 = styled.div`
color: #555;
font: 0/0 a;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: left;
position: relative;
`;

export const Writing_get_body_listbutton_button = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
min-width: 60px;
height: 36px;
border: 1px solid #d9dddf;
border-radius: 3px;
color: #333;
font-size: 13px;
line-height: 34px;
text-align: center;
transition: all .2s ease;
padding: 0 15px;
margin-left: 0;
`

export  const Writing_get_body_listbutton_span = styled.span`
cursor: pointer;
color: #333;
text-align: center;
margin: 0;
padding: 0;
border: 0;
position: relative;
display: inline-block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(170,170,170,0.999)' stroke='' viewBox='0 0 18 19'%3e%3cpath d='M17.41 10.96a2.46 2.46 0 01-.28 2.66 2.26 2.26 0 01-.85 2.93 2 2 0 01-1.93 2.43H9.73a.63.63 0 01-.63-.63c0-.35.28-.64.63-.64h4.62c.4 0 .73-.33.73-.74 0-.15-.04-.3-.13-.42a.65.65 0 01-.05-.6c.08-.2.25-.34.46-.38a.95.95 0 00.76-.94c0-.25-.09-.48-.26-.66a.64.64 0 01.09-.95 1.17 1.17 0 00.18-1.74.65.65 0 01-.16-.51.63.63 0 01.28-.46c.31-.2.5-.53.5-.9 0-.58-.47-1.06-1.05-1.06h-4.37a.62.62 0 01-.54-.32.65.65 0 010-.63c.9-1.67.13-3.71-.57-4.6-.38-.5-1.05-.63-1.34-.5-.05.03-.09.04-.06.2a13.3 13.3 0 010 3.16.69.69 0 01-.08.24L6.73 9.46c-.17.3-.57.4-.85.23a.64.64 0 01-.23-.87L7.6 5.38c.05-.44.15-1.7 0-2.67-.12-.7.18-1.3.78-1.57.85-.4 2.15.01 2.81.86a6.2 6.2 0 011.07 5.08h3.44A2.32 2.32 0 0118 9.4c0 .58-.21 1.13-.59 1.55zM5.65 14.73c0 .7-.23 1.28-.69 1.75-.51.52-1.23.79-2.13.79-.92 0-1.64-.27-2.15-.8A2.4 2.4 0 010 14.73v-4.7c0-.18.07-.34.2-.45a.7.7 0 01.8-.03c.17.12.25.29.25.48v4.7c0 .4.11.7.35.96.28.3.7.44 1.24.44s.95-.15 1.22-.44c.24-.24.36-.56.36-.95v-3.79c0-.17.07-.33.21-.44.3-.18.59-.15.8.02a.5.5 0 01.23.44v3.76zm2.32-4.1h2.16c.7 0 1.25.2 1.67.6.4.4.59 1.1.59 1.63 0 .56-.2 1.33-.6 1.7-.4.41-.97.62-1.66.62H8v2.39c0 .19-.08.35-.22.46a.65.65 0 01-.4.14.65.65 0 01-.41-.13.59.59 0 01-.22-.47v-5.82c0-.3.1-.58.31-.78.23-.23.54-.34.91-.34zm.02 1.15v2.27h2.07c.35 0 .62-.09.82-.28.12-.12.25-.58.25-.9 0-.3-.12-.7-.25-.82-.2-.2-.47-.29-.82-.29H8.07c-.05 0-.07.01-.08.02z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 18px;
height: 19px;
margin-right: 6px;
font: 0/0 a;
vertical-align: 14px;
`;

export const Writing_get_body_listbutton_em = styled.em`
cursor: pointer;
font-size: 13px;
line-height: 34px;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
position: relative;
color: #333;
`;

export const Writing_get_body_listbutton_2 = styled.button`
background-color: transparent;
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
padding: 0 16px;
min-width: 60px;
height: 36px;
border: 1px solid #d9dddf;
border-radius: 3px;
color: #333;
font-size: 13px;
line-height: 34px;
text-align: center;
transition: all .2s ease;
margin-left: 8px;

`;

export const Writing_get_body_list2_span = styled.span`
cursor: pointer;
color: #333;
font-size: 13px;
line-height: 34px;
text-align: center;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Writing_get_footer_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
margin-bottom: 60px;
padding-bottom: 0;
border-bottom: 0;
`;

export const Writing_get_footer_comments_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
margin-top: 38px;
height: 36px;
color: #555;
font-size: 18px;
line-height: 34px;
`;

export const Writing_get_footer_comments_span = styled.span`
cursor: pointer;
color: #555;
font-size: 18px;
line-height: 34px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
padding-right: 22px;
`;

export const Writing_get_footer_comment_count_em = styled.em`
cursor: pointer;
font-size: 18px;
line-height: 34px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
text-decoration: none;
color: #4279ff;
font-weight: bold;
`;

export const Writing_get_footer_comments_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Writing_get_footer_comments_form = styled.form`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_get_footer_comments_input_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
margin-top: 15px;
padding: 0 0 0 68px;
`;

export const Writing_get_footer_comments_img_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 0;
left: 0;
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
width: 48px;
height: 48px;
border-radius: 50%;
`;

export const Writing_get_footer_comments_img = styled.img`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
width: 48px;
height: 48px;
border-radius: 50%;
`;

export const Writing_get_footer_comments_area_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
position: relative;
background: #fff;
padding: 14px 20px 16px;
border: 1px solid #d9dddf;
`;

export const Writing_get_footer_comments_area_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const Writing_get_footer_comments_textarea = styled.textarea`
color: inherit;
font-family: inherit;
text-decoration: none;
display: none;
`;

export const Writing_get_footer_comments_text_div = styled.div`
-webkit-user-modify: read-write;
-webkit-line-break: after-white-space;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
background: transparent;
padding-bottom: 21px;
color: #333;
font-size: 14px;
outline: none;
line-height: 21px;
cursor: text;
word-break: break-word;
word-wrap: break-word;
overflow: hidden;
`;

export const Writing_get_footer_comments_text_button_div = styled.div`
color: #555;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
width: 100%;
margin-top: 18px;
font: unset;
`;

export const Writing_get_footer_comments_text_button = styled.button`
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
padding: 0 16px;
min-width: 60px;
border: 1px solid #d9dddf;
border-radius: 3px;
font-size: 13px;
text-align: center;
transition: all .2s ease;
font-weight: bold;
background: #fff;
border-color: #d9dddf !important;
color: #aaa !important;
margin-left: 8px;
height: 32px;
line-height: 30px;

text-align: right;
`;

export const Writing_get_footer_comments_text_span = styled.span`
cursor: pointer;
font-size: 13px;
text-align: center;
font-weight: bold;
color: #aaa !important;
line-height: 30px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const Writing_get_footer_right_div = styled.div`
color: #555;
font: unset;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: right;
position: relative;
text-align: right;
`;

export const Writing_get_body_right_button_div = styled.div`
color: #555;
font: 0/0 a;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
float: right;
position: relative;
text-align: right;
`;

export const Writing_get_footer_comments_list_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;

export const Writing_get_footer_comments_list_ul = styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
margin-top: 20px;
`;

export const Writing_get_footer_comments_list_li_1 = styled.li`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
float: left;
`;


export const Writing_get_footer_comments_list_button_1 = styled.button`
list-style: none;
background-color: transparent;
margin: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
height: 36px;
padding: 0 22px 0 0;
line-height: 34px;
`;

export const Writing_get_footer_comments_list_span_1 =styled.span`
list-style: none;
cursor: pointer;
line-height: 34px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
font-size: 14px;
padding-left: 10px;
color: #333;
font-weight: bold;
`;

export const Writing_get_footer_comments_list_ul_2 = styled.ul`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
background: #f8fafc;
margin-top: 7px;
`;

export const Writing_footer_comments_li = styled.li`
color: #555;
font-size: 12px;
line-height: 1.2;
margin-top: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
list-style: none;
position: relative;
padding: 30px 28px 28px 96px;
border-bottom: 1px solid #eee;
`;

export const Comments_profile_img_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: absolute;
top: 29px;
left: 28px;
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
width: 48px;
height: 48px;
border-radius: 50%;
cursor: pointer;
`;

export const Comments_profile_img = styled.img`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
cursor: pointer;
margin: 0;
padding: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
width: 48px;
height: 48px;
border-radius: 50%;
border: 1px solid rgba(0,0,0,0.1);
`;

export const Comments_profile_user_id_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
z-index: 5;
`;

export const Comments_profile_user_id_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
position: relative;
`;

export  const Commetns_profile_user_id_div_3 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: flex;
align-items: center;
flex: 0 1 auto;
position: relative;
width: 100%;
vertical-align: middle;
padding-left: 0;
`;

export const Comments_profile_user_id_button = styled.button`
list-style: none;
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
line-height: 1.2;
color: #333;
font-weight: bold;
font-family: "NGBS", verdana, applegothic, sans-serif;
font-size: 13px;
`;

export const Comments_profile_user_id_p = styled.p`
list-style: none;
cursor: pointer;
line-height: 1.2;
color: #333;
font-weight: bold;
font-size: 13px;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
position: relative;
font-family: "NG";
`;

export const Comments_profile_user_id_em = styled.em`
list-style: none;
cursor: pointer;
line-height: 1.2;
font-size: 13px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
color: #aaa;
`;

export const Comments_profile_date_span = styled.span`
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
line-height: 1.2;
position: relative;
margin-left: 20px;
color: #666;
font-size: 13px;
`;

export const Comments_content_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
margin-top: 11px;
`;

export const Comments_content_p = styled.p`
list-style: none;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
color: #666;
font-size: 14px;
line-height: 21px;
word-break: break-word;
word-wrap: break-word;
overflow: hidden;
`;

export const Comments_up_button = styled.button`
list-style: none;
background-color: transparent;
margin: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
height: 32px;
line-height: 30px;
padding: 0;
`;

export const Comments_up_span = styled.span`
list-style: none;
cursor: pointer;
margin: 0;
padding: 0;
border: 0;
position: relative;
display: inline-block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(170,170,170,0.999)' stroke='' viewBox='0 0 18 19'%3e%3cpath d='M17.41 10.96a2.46 2.46 0 01-.28 2.66 2.26 2.26 0 01-.85 2.93 2 2 0 01-1.93 2.43H9.73a.63.63 0 01-.63-.63c0-.35.28-.64.63-.64h4.62c.4 0 .73-.33.73-.74 0-.15-.04-.3-.13-.42a.65.65 0 01-.05-.6c.08-.2.25-.34.46-.38a.95.95 0 00.76-.94c0-.25-.09-.48-.26-.66a.64.64 0 01.09-.95 1.17 1.17 0 00.18-1.74.65.65 0 01-.16-.51.63.63 0 01.28-.46c.31-.2.5-.53.5-.9 0-.58-.47-1.06-1.05-1.06h-4.37a.62.62 0 01-.54-.32.65.65 0 010-.63c.9-1.67.13-3.71-.57-4.6-.38-.5-1.05-.63-1.34-.5-.05.03-.09.04-.06.2a13.3 13.3 0 010 3.16.69.69 0 01-.08.24L6.73 9.46c-.17.3-.57.4-.85.23a.64.64 0 01-.23-.87L7.6 5.38c.05-.44.15-1.7 0-2.67-.12-.7.18-1.3.78-1.57.85-.4 2.15.01 2.81.86a6.2 6.2 0 011.07 5.08h3.44A2.32 2.32 0 0118 9.4c0 .58-.21 1.13-.59 1.55zM5.65 14.73c0 .7-.23 1.28-.69 1.75-.51.52-1.23.79-2.13.79-.92 0-1.64-.27-2.15-.8A2.4 2.4 0 010 14.73v-4.7c0-.18.07-.34.2-.45a.7.7 0 01.8-.03c.17.12.25.29.25.48v4.7c0 .4.11.7.35.96.28.3.7.44 1.24.44s.95-.15 1.22-.44c.24-.24.36-.56.36-.95v-3.79c0-.17.07-.33.21-.44.3-.18.59-.15.8.02a.5.5 0 01.23.44v3.76zm2.32-4.1h2.16c.7 0 1.25.2 1.67.6.4.4.59 1.1.59 1.63 0 .56-.2 1.33-.6 1.7-.4.41-.97.62-1.66.62H8v2.39c0 .19-.08.35-.22.46a.65.65 0 01-.4.14.65.65 0 01-.41-.13.59.59 0 01-.22-.47v-5.82c0-.3.1-.58.31-.78.23-.23.54-.34.91-.34zm.02 1.15v2.27h2.07c.35 0 .62-.09.82-.28.12-.12.25-.58.25-.9 0-.3-.12-.7-.25-.82-.2-.2-.47-.29-.82-.29H8.07c-.05 0-.07.01-.08.02z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 18px;
height: 19px;
margin-right: 6px;
font: 0/0 a;
vertical-align: 15px;
`;

export const Comments_up_em = styled.em`
list-style: none;
cursor: pointer;
line-height: 30px;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
font-style: normal;
font-weight: normal;
text-decoration: none;
position: relative;
color: #333;
`;

export const User_info_section = styled.section`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: block;
`;


export const User_info_full_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: flex;
position: fixed;
top: 65px;
background: #fcfdfd;
width: 932px;
padding: 13px 31px 13px 48px;
border: 1px solid #ebecec;
border-bottom-right-radius: 8px;
border-width: 0 1px 1px 0;
box-sizing: border-box;
z-index: 10;
flex-wrap: wrap;
`;

export const User_info_second_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
-webkit-box-flex: 1;
flex: 1;
`;

export const User_info_title_area_div =styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
`;

export const User_info_title_h4 = styled.h4`
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
display: inline;
color: #000;
letter-spacing: -.1px;
font-size: 21px;
`;

export const User_info_title_a =styled.a`
line-height: 1.2;
letter-spacing: -.1px;
font-size: 21px;
margin: 0;
padding: 0;
border: 0;
vertical-align: baseline;
color: inherit;
font-family: inherit;
text-decoration: none;
`;

export const User_info_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
display: inline-block;
position: relative;
top: 2px;
margin-left: 4px;
vertical-align: text-bottom;
`;

export const User_info_div_button = styled.button`
background-color: transparent;
margin: 0;
padding: 0;
border: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
position: relative;
overflow: visible;
color: transparent;
`;

export const User_info_div_span = styled.span`
cursor: pointer;
color: transparent;
margin: 0;
padding: 0;
vertical-align: baseline;
position: relative;
display: block;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(51,51,51,0.999)' stroke='' viewBox='0 0 2 12'%3e%3cpath d='M0 12V4h2v8H0zM0 0h2v2H0V0z'/%3e%3c/svg%3e") center no-repeat;
background-size: 2px 12px;
width: 23px;
height: 23px;
border: solid 1px #a0a0a0;
border-radius: 50%;
font: 0/0 a;
`;

export const User_info_body_div = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
margin-left: 40px;
-webkit-box-flex: 0;
flex: 0 0 auto;
`;

export const User_info_body_div_2 = styled.div`
color: #555;
font-size: 12px;
line-height: 1.2;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
`;

export const User_info_body_2_button = styled.button`
margin: 0;
vertical-align: top;
outline: none;
cursor: pointer;
font-family: inherit;
transition: all .2s ease;
float: left;
background: #fff;
height: 36px;
border: 1px solid #eceff1;
border-radius: 4px;
padding: 0 15px;
margin-left: 0;
`;

export const User_info_body_2_em = styled.em`
cursor: pointer;
margin-top: 0;
padding: 0;
border: 0;
text-decoration: none;
position: relative;
display: inline-block;
font: 0/0 a;
background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='rgba(34,34,34,0.999)' stroke='' viewBox='0 0 20 18'%3e%3cpath fill-rule='evenodd' d='M10.009 1.337l2.129 4.469.282.592.631.094 4.758.717-3.443 3.476-.457.461.108.651.813 4.91-4.257-2.32-.564-.307-.564.307-4.258 2.32.814-4.91.108-.651-.457-.461-3.443-3.476 4.759-.717.631-.094.282-.592 2.128-4.469m7.837 5.834v.001-.001M10.009.049c-.452 0-.864.265-1.064.685L6.794 5.25l-4.81.724c-.447.067-.819.391-.958.835-.14.446-.023.934.301 1.262l3.479 3.513-.822 4.963c-.065.395.06.792.326 1.071.045.047.094.091.147.131.029.022.059.042.09.061.186.116.396.174.607.174.144 0 .288-.028.426-.082.043-.017.085-.037.126-.059l4.303-2.345 4.302 2.345c.174.094.364.141.553.141.246 0 .49-.079.697-.235.366-.275.548-.74.472-1.202l-.822-4.963 3.481-3.513c.324-.328.44-.816.301-1.262-.14-.444-.512-.768-.958-.835l-4.81-.724L11.073.734c-.2-.42-.613-.685-1.064-.685z'/%3e%3c/svg%3e") 0 0 no-repeat;
background-size: 100% 100%;
width: 16px;
height: 15px;
margin-right: 6px;
vertical-align: 12px;

`;

export const User_info_body_2_span =styled.span`
cursor: pointer;
margin: 0;
padding: 0;
border: 0;
font-family: "NGBS", verdana, applegothic, sans-serif, "Malgun Gothic" , "맑은 고딕" , "dotum";
vertical-align: baseline;
position: relative;
font-size: 12px;
font-weight: bold; 

`;