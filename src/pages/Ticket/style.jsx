import styled from 'styled-components'


export const  TicketProduct_div =styled.div`
    width: 960px;
    padding: 0;
    margin: 109px auto 0 auto;
    background-color: 1px soild #000;
`;



export const H3 = styled.h3`
position: relative;
font-size: 20px;
color: #000;
letter-spacing: -1px;
font-weight: bold;
margin: 28px 0 20px 0;
`;

export const SPAN = styled.span`
display: block;
padding: 16px 0 8px;
line-height: 30px;
font-size: 15px;
color: #7a7a7a;
font-weight: normal;
`;
export const Ticket_Li = styled.li`
width: 101%;
list-style:none;
margin-bottom: 15px;
    &::after{
        content: "";
        clear: both;
        display: block;
    }
`;

export const Ticket_item_div= styled.div`
background: #4978ff;
border-radius: 4px 0 0 4px;
width: 254px;
height: 128px;
position: relative;
padding: 0 0 0 26px;
letter-spacing: -1px;
float: left;
word-break: break-all;
word-wrap: break-word;
`;
export const Ticket_item_div1= styled.div`
background: #38cb15;
border-radius: 4px 0 0 4px;
width: 254px;
height: 128px;
position: relative;
padding: 0 0 0 26px;
letter-spacing: -1px;
float: left;
word-break: break-all;
word-wrap: break-word;
`;
export const Ticket_name= styled.span`
    color: #fff;
    font-size: 23px;
    display: block;
    margin: 30px 0 1px 0;
    line-height: 100%;
`;
export const Ticket_date= styled.strong`
color: #fff;
font-size: 23px;
letter-spacing: -1px;
width: 165px;
padding-top: 2px;
display: block;
text-align:center;
word-wrap: break-word;
`;

export const Ticket_desc_div= styled.div`
position: relative;
border: 1px solid #e0e0e0;
float: left;
height: 128px;
background: #fff;
width: 679px;
border-radius: 0 4px 4px 0;
border-left: none;
`;

export const Ticket_desc_inner = styled.ul`
padding: 17px 33px 0 42px;
`;

export const Ticket_desc_li = styled.li`
position: relative;
width: 100%;
height: 82px;
margin: 0;
list-style:none;
border-bottom: 1px solid #f1f1f1;
`;
export const Desc_span = styled.span`
height: 100%;
    display: inline-block;
    vertical-align: middle;
`;
export const Ticket_desc_mt_div= styled.div`
display: inline-block;
width: 197px;
line-height: 100%;
font-size: 16px;
color: #4978ff;
vertical-align: -6px;
`;
export const Ticket_desc_strong = styled.strong`
padding-right: 5px;
font-size: 24px;
`;

export const Ticket_desc_price = styled.div`
display: inline-block;
zoom: 1;
`;

export const Ticket_desc_price_p = styled.p`
font-size: 21px;
color: #222;
text-align: right;
letter-spacing: -1px !important;
white-space: nowrap;
`;
export const Ticket_desc_buy = styled.div`
position: absolute;
top: 21px;
right: 6px;
width: auto;
margin: 0;
font-size:0;

`;

export const Ticket_desc_buy1 = styled.div`
position: absolute;
top: 21px;
right: 6px;
width: auto;
margin: 0;

`;
export const Ticket_desc_buy_btn = styled.button`
width: 215px;
border: 1px solid #74b3ff;
color: #0072ff;
font-size: 14px;
height: 41px;
margin: 0 5px 0 4px;
border-radius: 2px;
word-wrap: break-word;
background-color:#fff;
cursor: pointer;
`;
export const Ticket_desc_buy_btn1 = styled.button`
width: 215px;
border: 1px solid #74b3ff;
color: #ffffff;
font-size: 14px;
height: 41px;
margin: 0 5px 0 4px;
border-radius: 2px;
word-wrap: break-word;
background: rgb(73, 120, 255);
cursor: pointer;
`;

export const Ticket_desc_use_btn = styled.button`
width: 108px;
border: 1px solid #74b3ff;
color: #0072ff;
font-size: 14px;
height: 41px;
margin: 0 5px 0 4px;
border-radius: 2px;
word-wrap: break-word;
background-color:#fff;
cursor: pointer;
`;
export const Ticket_desc_use_btn1 = styled.button`
width: 108px;
border: 1px solid #74b3ff;
color: #ffffff;
font-size: 14px;
height: 41px;
margin: 0 5px 0 4px;
border-radius: 2px;
word-wrap: break-word;
background: rgb(73, 120, 255);
cursor: pointer;
`;

export  const Ticket_icon = styled.span`
    right: 40px;
    background: url(/img/img_icon.png) 0 0 no-repeat;
    width: 66px;
    height: 70px;
    color: rgb(255, 255, 255);
    display: block;
    position: absolute;
    top: 50px;
    left: 198px;
 
`;

export  const Ticket_icon1 = styled.span`
    right: 40px;
    background: url(/img/img_icon.png) -210px 0 no-repeat;
    width: 66px;
    height: 70px;
    color: rgb(255, 255, 255);
    display: block;
    position: absolute;
    top: 50px;
    left: 198px;
`;
//구매날짜
export const Ticket_list_date = styled.div`
display: inline-block;
zoom: 1;
width:20%;
`;
//사용시작
export  const Ticket_list_start = styled.div`
display: inline-block;
zoom: 1;
width:15%;
margin-left:23px;
`;
//사용만료
export  const Ticket_list_end = styled.div`
display: inline-block;
zoom: 1;
width:15%;
margin: 0 15px;
`;


export  const Ticket_list_date_st = styled.p`
font-size: 16px;
color: #222;

text-align: center;
letter-spacing: -1px !important;
white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export  const Ticket_list_date_ed = styled.p`
font-size: 16px;
color: #222;
text-align: center;
letter-spacing: -1px !important;
white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
`;
export const Ticket_list_date_p = styled.p`
font-size: 16px;
color: #222;
text-align: center;
letter-spacing: -1px !important;
white-space: nowrap;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

`;
export const Ticket_list_mt_p = styled.p`
font-size: 16px;
color: #222;
text-align: right;
letter-spacing: -1px !important;
white-space: nowrap;
overflow:hidden;
`;
export const Ticket_list_mt_div = styled.div`
    display:inline-block;
    zoom:1;
    width:13%;
    margin:0 20px;
    text-align:center;
`;
export const Ticket_desc_use = styled.div`
position: absolute;
top: 8px;
right: 6px;
width: auto;
margin: 0;
`;


// 구매하기 
export const Pop_ticket_div = styled.div`
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    z-index: 999999;
    width: 508px;
    height:300px;
    background: #EFF3F9;
    margin-top: -323.229px;
    margin-left: -254px;
    display: block;

`;

export const Add_Ticket = styled.div`
position: relative;
padding: 32px 32px 45px;
background: #eff3f9;
font-family: 'NG', AppleGothic, Sans-serif;
line-height: 1em;
border: 1px solid #2c84ce;
font-size:12px;
`;

export const Add_at = styled.div`
font-family: 'NG', AppleGothic, Sans-serif;
line-height: 1em;
`;

export const Add_dt = styled.dt`
position: relative;
padding: 0;
font-size: 14px;
line-height: 100%;
`;

export const Add_strong = styled.strong`
font-family: 'NG', AppleGothic, Sans-serif;
    line-height: 1em;
`;

export const Add_dd = styled.dd`
overflow: hidden;
position: relative;
z-index: 11;
margin-top: 15px;
height: 52px;
border: 2px solid #bbb;
background: #fff;
margin-left:0;
padding: 0;
`;
 export const Add_txt_span = styled.span`
 position: absolute;
 top: 0;
 left: 13px;
 font-size: 16px;
 line-height: 52px;
 color: #111;
 letter-spacing: -1px;
 font-family: 'NGB';
 `;
 export const Add_coin_input = styled.input`
 position: absolute;
 top: 7px;
 right: 53px;
 width: 170px;
 padding: 0;
 text-align: right;
 color: #016cfe;
 border: none;
 outline: none;
 font-family: 'NGB';
 color: #2e2e33;
 font-size: 26px;
 background-color: #fff;
 transition: all 0.3s cubic-bezier(0.56, 0.12, 0.12, 0.98);
 `;
 export const Add_count = styled.span`
 position: absolute;
 top: 0;
 right: 36px;
 font-size: 16px;
 line-height: 53px;
 font-family: 'NGB';
 color: #111;
 transition: all 0.3s cubic-bezier(0.56, 0.12, 0.12, 0.98);
 `;
 export const Add_st_dl = styled.dl`
 margin-top: 19px;
 height: 16px;
 `;
 export const Add_st_dt = styled.dt`
 display: inline-block;
 color: #444;
 font-size: 14px;
 `;
 export const Add_st_dd = styled.dd`
 display: inline-block;
 color: #444;
 font-size: 14px;
 margin-left: 6px;
 `;
 export const Add_st_span = styled.span`
 display: inline-block;
 padding-right: 2px;
 font-family: 'NGB';
 font-size: 16px;
 color: #006bfe;
`;

 export const Add_btn_area = styled.div`
 padding-top: 35px;
 text-align: center;
 `;
 export const Btn_gift = styled.button`
 margin-right: 16px;
 color: #fff;
 background: #006bfe;
 display: inline-block;
    width: 132px;
    height: 42px;
    line-height: 42px;
    vertical-align: middle;
    font-size: 16px;
    outline: none;
    font-family: 'NGB', AppleGothic, Sans-serif;
    cursor: pointer;
    `;
 export const Btn_cancel = styled.button`
 display: inline-block;
 width: 132px;
 height: 42px;
 line-height: 42px;
 vertical-align: middle;
 font-size: 16px;
 outline: none;
 font-family: 'NGB', AppleGothic, Sans-serif;
 border: 1px solid #d3d4d5;
    color: #000;
    background: #fff;
    cursor: pointer;
 `;

 export const ReactModal__Overlay =styled.div`
    inset:0;
 `;
 export const Modal_div= styled.div`
 background-color:#000;
 opactiy:0.7;

 `;

 export const Add_txt_span_tkName = styled.span`
 position: absolute;
 top: 0;
 right: 40%;
 font-size: 24px;
 font-weight:900;
 line-height: 52px;
 color: #111;
 letter-spacing: -1px;
 font-family: 'NGB';
 `;

