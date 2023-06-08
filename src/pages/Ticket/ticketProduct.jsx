/* eslint-disable react-hooks/rules-of-hooks */

import React, { useState, useEffect } from "react";
import { Ticket_list_mt_p, Ticket_desc_use, Ticket_list_mt_div, Ticket_list_date,Ticket_list_date_p,Ticket_list_date_ed,Ticket_list_end,Ticket_list_date_st,
  Ticket_list_start, Ticket_desc_use_btn, Ticket_icon1, Ticket_item_div1, Ticket_desc_strong,Ticket_icon, Ticket_desc_buy, Ticket_desc_buy_btn,
  Ticket_desc_price_p,Ticket_desc_price, Ticket_desc_li, Ticket_desc_mt_div, Desc_span, Ticket_desc_inner, Ticket_desc_div,Pop_ticket_div,Add_Ticket,Add_at,Add_btn_area,Btn_gift,Btn_cancel,Add_st_span,Add_st_dl,Add_st_dt,Add_st_dd,Add_dt,Add_strong,Add_dd,Add_txt_span,Add_coin_input,Add_count,Modal_div,Add_txt_span_tkName,
  Ticket_Li, Ticket_name,Ticket_date,Ticket_item_div,H3,SPAN, TicketProduct_div,ReactModal__Overlay
} from "./style";
import Modal from "react-modal";
import axios from 'axios';
import useSWR from 'swr'
import fetcher from "../utils/fetcher";
import { key } from "fontawesome";
Modal.setAppElement('#root');

const TicketProduct = () => {

  //유저아이디 가져오는 훅
  const [userId, setUserId] = useState('');

  //로그인 세션 유지하는 훅
  const {data} = useSWR('/user/login', fetcher);

  // 유저가 가지고 있는 코인 값 
  const [dbCoin, setDBcoin]= useState();

  //모달 열림여부를 나타내는 변수
  const [isModalOpen, setIsModalOpen] = useState(false); // 모달 열림 여부를 저장하는 상태 변수

  // 티켓사용여부를 나타내는 변수
  const [isTicketUsed, setIsTicketUsed] = useState();

  //티켓의 상품정보리스트를 가져오는 변수
  const [ticketProductInfo, setTicketProductInfo] = useState([]);

  //보유하고있는 티켓리스트을 나타내는 변수
  const [ticketInfo, setTicketInfo] = useState([]);


  const [priceInfo, setPriceInfo] =useState();

  

   

  // 티켓사용 여부를 나타내는 버튼 이벤트
  function onClickTicketUse() {

  
    
    axios.post('/ticket/useTicket', {
        //ticketNo: , // 사용중으로 설정할 티켓의 ticketNo 값 전달
          userId: userId,
          ticketUse:1 

      })
      .then((response) => {
        const userId = data?.userId;
        console.log("티켓사용 성공:", userId);
        //setTicketInfo(updatedTicketInfo);
      })
      .catch((error) => {
        console.log("Error 실패:", error);
      });
  }
  

  
  //  구매할때  7,30,365일권 구별해서 구매하는 창으로 가는 페이지
  const buyButtonClick = (key) => {
    setIsModalOpen(key.ticketProdNo); // 모달을 열기 위해 상태를 true로 변경
    // const value = (ticketProduct, key);
    console.log("ticketProdNo"+key.ticketProdNo);

  };




  //addTicket 유저아이디 티켓번호 티켓구매(현재시간)  시작날짜(널)  만료날짜(널)   티켓사용여부(1) 구매날짜 티켓상품번호

  function addTicket(ticketProduct) {
    if (userId) {
      axios
        .get(`/user/getUser/${userId}`)
        .then((response) => {
          const userData = response.data['data'];
          if (userData) {
            const ticketBuy = {
              userId: userId,
              ticketUse: 0,
              ticketProdNo: ticketProductInfo.ticketProdNo
            };
  
            axios
              .post(`/ticket/addTicket`, ticketBuy)
              .then((response) => {
                const updateCoin = dbCoin - ticketProduct.price; // 코인 차감
                console.log("Coinupdate해라"+updateCoin);
                updateUserCoin(updateCoin);
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            console.log('유저 정보가 존재하지 않습니다.');
            // 오류 처리 또는 사용자에게 알리는 메시지를 표시합니다.
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log('유저 아이디가 유효하지 않습니다.');
      // 오류 처리 또는 사용자에게 알리는 메시지를 표시합니다.
    }
  }
  


  
  // 컨트롤러에 ticket사용하기 restcontroller 
  function updateUserCoin(updateCoin){

  axios.post('/user/updateUser',{
    userId:userId,
    coin:updateCoin
  })
  .then(() => {
      console.log("업데이트 성공 addTicket -------------------------------");
  })
  .catch((error)=>{
    console.log(error);
    //  addTicket 등록중 발생한 오류...
  })

 }



 



  // 모달 닫기 
  const handleCloseModal = (ticketProduct) => {
    setIsModalOpen(ticketProduct.ticketProdNo); // 모달을 닫기 위해 상태를 false로 변경   
  };



  // 사용하기버튼
  const useButtonClick = (ticket,key) => {
     setIsTicketUsed(ticket.ticketUse);

  };    




  //user에 있는 데이터 가져오기
  useEffect(() => {
    if (userId !== '') {
      axios.get('/user/getUser/' + userId).then((response) => {
        setDBcoin(response.data.data.coin);
        console.log("DB코인부분~!~!!!" + dbCoin);
      });
    }
  }, [userId]);



// 이용권 상품리스트
// 이용권 상품리스트
useEffect(() => {
  axios.get('/ticketProduct/getTicketProductAdminList').then((response) => {
    const ticketProductData = response.data['data'];
    setTicketProductInfo(ticketProductData);
    setPriceInfo(response.data.data.price);
    console.log(ticketProductInfo);

    ticketProductData.forEach((ticketProduct) => {
      if (ticketProduct.ticketProdNo === 0) {
        ticketProduct.ticketName = '7일권';
      } else if (ticketProduct.ticketProdNo === 1) {
        ticketProduct.ticketName = '30일권';
      } else if (ticketProduct.ticketProdNo === 3) {
        ticketProduct.ticketName = '365일권';
      }
    });
  });
}, []);




// 로그인  + 이용권리스트 
useEffect(() => {
  axios.get('/user/login').then((response) => {
    const userId = response.data.data.userId;
    setUserId(userId);
    console.log("나나나" + userId);

    axios.get(`/ticket/getTicketList/${userId}`).then((response) => {
        setTicketInfo(response.data['data']);
          
        console.log("티켓이부분 잘나오는데?" + JSON.stringify(response.data));
      });
      
  });
}, []);




  return (
    <TicketProduct_div>
      <H3>이용권 PLUS</H3>
      <SPAN>광고없이 즐기세요</SPAN>
      {ticketProductInfo.map((ticketProduct, key) => (
        <Ticket_Li key={ticketProduct.ticketProdNo}>
          <Ticket_item_div>
            <Ticket_name>
              {ticketProduct.ticketProdNo === 1
                ? "7일 이용권"
                : ticketProduct.ticketProdNo === 2
                ? "30일 이용권"
                : "할인 이용권"}
            </Ticket_name>
            <Ticket_date>NO 광고</Ticket_date>
            <Ticket_icon></Ticket_icon>
          </Ticket_item_div>
          <Ticket_desc_div>
            <Ticket_desc_inner>
              <Ticket_desc_li>
                <Desc_span></Desc_span>
                <Ticket_desc_mt_div>
                  <Ticket_desc_strong>
                    {ticketProduct.ticketProdNo === 1
                      ? "7"
                      : ticketProduct.ticketProdNo === 2
                      ? "30"
                      : "365"}
                  </Ticket_desc_strong>
                      일권
                </Ticket_desc_mt_div>

                {/* 이용권 가격 */}
                <Ticket_desc_price>
                  <Ticket_desc_price_p>{ticketProduct.price} 개</Ticket_desc_price_p>
                </Ticket_desc_price>

                {/* 이용권 구매하기 Button */}
                <Modal_div>
                    <Ticket_desc_buy>
                      <Ticket_desc_buy_btn key={key} onClick={() =>
                        buyButtonClick(ticketProduct, key) }  >
                          구매하기
                      </Ticket_desc_buy_btn>
                    </Ticket_desc_buy>

                        {/* 이용권 구매하기 MODAL */}

                        {isModalOpen !== null && (
                      <Modal
                        isOpen={isModalOpen === ticketProduct.ticketProdNo}
                        onRequestClose={handleCloseModal}
                        overlayClassName="Overlay"
                        className="modal"
                        key={ticketProduct.ticketProdNo}
                      >
                    <Pop_ticket_div>
                            <Add_Ticket>
                                <Add_at>
                                    <Add_dt>
                                        <Add_strong>
                                            {data?.userId}
                                        </Add_strong>
                                        님이 구매
                                    </Add_dt>
                                </Add_at>
                                <Add_dd>
                                    <Add_txt_span ></Add_txt_span>
                                    <Add_txt_span_tkName>
                                    {key === 0
                                        ? "7일 이용권"
                                        : key === 1
                                        ? "30일 이용권"
                                        : key === 2
                                        ? "365일 이용권"
                                        : "이용권"}
                                    </Add_txt_span_tkName>
                                    
                                </Add_dd>
                                <Add_st_dl>
                                    <Add_st_dt>보유 코인</Add_st_dt>
                                    <Add_st_dd>
                                        <Add_st_span>{dbCoin}</Add_st_span>개
                                    </Add_st_dd>
                                </Add_st_dl>
                                <Add_dd>
                                    <Add_txt_span>필요한 코인</Add_txt_span>
                                        <Add_coin_input  value={ticketProduct.price} readOnly></Add_coin_input>
                                    <Add_count>개</Add_count>
                                </Add_dd>
                                <Add_btn_area>
                                    <Btn_gift onClick={addTicket}>구매하기(코인으로)</Btn_gift>
                                    <Btn_cancel onClick={handleCloseModal}>취소</Btn_cancel>
                                </Add_btn_area>
                            </Add_Ticket>
                    </Pop_ticket_div> 
                  </Modal>)}
                  
                </Modal_div>
               
              </Ticket_desc_li>
            </Ticket_desc_inner>
          </Ticket_desc_div>
        </Ticket_Li>
      ))}


         <H3>이용권 보유목록</H3>
        <SPAN>이용권은 1개만 사용이 가능하고 중복 사용이 불가능합니다.<br/> 만료시 보유목록에서 사라집니다.</SPAN> 
                 
      {ticketInfo.map((ticket) => (
        <Ticket_Li key={ticket.ticketNo}>
          <Ticket_item_div1>
            <Ticket_name>이용권 보유목록</Ticket_name>
            <Ticket_date>
                No. {ticket.ticketNo}
            </Ticket_date>
            <Ticket_icon1></Ticket_icon1>
          </Ticket_item_div1>
          <Ticket_desc_div>
            <Ticket_desc_inner>
              <Ticket_desc_li>
                <Ticket_list_date>
                  <Ticket_list_date_p>{ticket.ticketDate}</Ticket_list_date_p>
                </Ticket_list_date>
                <Ticket_list_mt_div>
                  <Ticket_list_mt_p>            
                    {ticket.ticketName === 1 ? "7일이용권" : ticket.ticketName === 2 ? "30일이용권" : ""}
                  </Ticket_list_mt_p>
                </Ticket_list_mt_div>
                <Ticket_list_start>
                  <Ticket_list_date_st>{ticket.ticketStart}</Ticket_list_date_st>
                </Ticket_list_start>
                <Ticket_list_end>
                  <Ticket_list_date_ed>{ticket.ticketEnd}</Ticket_list_date_ed>
                </Ticket_list_end>
                  <Ticket_desc_use>
                    <Ticket_desc_use_btn key={key} onClick={() =>{useButtonClick(ticket.ticketNo,key);} }>
                    {ticket.ticketUse === 1 ? "사용중" : "사용하기"}{ticket.ticketNo}
                    </Ticket_desc_use_btn>
                  </Ticket_desc_use>

              </Ticket_desc_li>
            </Ticket_desc_inner>
          </Ticket_desc_div>
        </Ticket_Li>
      ))}
    </TicketProduct_div>
  );
};

export default TicketProduct;