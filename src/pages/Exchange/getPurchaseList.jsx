import React, {useState, useEffect} from "react";
import {Modal,Add_at,Table_title1,Btn_cancel,Tabke_span,Add_st_dd,Btn_gift,Add_btn_area,Add_st_span,Add_dt,Add_coin_input,Add_count,Add_st_dt,Add_st_dl,Add_strong,Add_txt_span,Add_dd,Add_Ticket,Add_txt_span_tkName,Pop_ticket_div,PurchaseList_div,Purchase_title,Purchase_notice_p,Button_div ,Table_td,Table_title,Purchase_table,Colgroup,Table_tr,Table_th,Purchase_button,Col,Table_thead} from "./style";
import axios from 'axios';
import useSWR from 'swr'
import fetcher from "../utils/fetcher";


function Exchange() {

    //  로그인 세션 유지  재가용성 높이기 위해서   fetcher 사용
    const {data} = useSWR('/user/login', fetcher);

    //  gettPurchaseList에서 데이터 가져옴
    const [purchaseInfo, setPurchaseInfo] = useState([]);

    // Login  세션에서 유지  userId 가져옴
    const [userId, setUserId] = useState('');

    //모달에서  입력한 코인값
    const [coinAmount, setCoinAmount] = useState(); 

    // 모달 상태를 관리하는 상태 변수
    const [isModalOpen, setIsModalOpen] = useState(false); 

    // getUser 에서 데이터 가져옴 Coin 업데이트 용으로 사용
    const [dbCoin, setDBcoin] = useState(); 

     //  아임포트에서 가저오는 고유한 키값
     const [ imp, setImp] = useState('');
    
    //  //  아임포트에서 결제한 고유한 키값
    //  const [merchant,setMerchant] = useState('');
     
    //  // 아임포트에서 받아오는 결제 수단 값
    // const [payMethod, setPayMethod] = useState('');

    // // 아임포트에서 받아오는 결제 금액 값
    // const [payAmount,setPayAmount] = useState();
    


     // 모달 열기 함수
     const openModal = () => {
      setIsModalOpen(true);
    };

    // 모달 닫기 함수
    const closeModal = () => {
        setIsModalOpen(false);
    };

  
    
    // 클릭시 아임포트 결제시스템 연결 
function onClickPayment() {

      const { IMP } = window;

      if (IMP) {

        // 입력한 코인값을 받아오는 훅
        const paymentAmount = parseInt(coinAmount);

        //아임포트로 데이터를 보냄
        IMP.request_pay({
          pg: "html5_inicis",
          pay_method: "card",
          merchant_uid: `mid_${new Date().getTime()}`,
          name:"코인",
          amount: paymentAmount,
          buyer_name: userId,
        }, callback);

        //아임포트로 데이터를 받음
        function callback(rsp) {

          if (rsp.success) {

            alert('결제 성공');

            const purchase = {
              userId: userId,
              impUid: rsp.imp_uid,
              merchantUid: rsp.merchant_uid,
              paymentMethod: rsp.pay_method === 'point' ? 0 : 1,
              paymentAmount: paymentAmount
            };
            addPurchase(purchase);
              
          } else {
            alert(`결제 실패: ${rsp.error_msg}`);
          }
        }
    }
  }
  
  




  function addPurchase(purchase) {

  //       // 결제 데이터를 화면에 등록하기 위한 용도
    axios.post(`/purchase/addPurchase`, purchase)
    .then((response) => {
          console.log(response.data);
          const updateCoin = dbCoin + purchase.paymentAmount;
          updateUserCoin(updateCoin);
        })
        .catch((error) => {
          console.error(error);
          // 등록 중에 발생한 오류 처리 코드
          // ...
        });
    }
  
    function updateUserCoin(updateCoin){
      axios.post('/user/updateUser', {
        userId: userId,
        coin: updateCoin
      })
        .then((response) => {
          console.log("업데이트 성공:", response.data);
          // 이 부분에 원하는 로직을 추가할 수 있습니다.
        })
        .catch((error) => {
          console.log("Error 실패:", error);
        });
    }
   
          
          
            





  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.iamport.kr/v1/iamport.js';
    script.async = true;
    script.crossOrigin = 'anonymous'; // crossorigin 속성 추가
    document.head.appendChild(script);

    script.addEventListener('load', handleScriptLoad);

    return () => {
      document.head.removeChild(script);
    };
  }, []);



  //가맹점식별하기
  function handleScriptLoad() {
    const { IMP } = window;
    if (IMP) {
      IMP.init('imp62218762');
    } else {
      console.log('아임포트 라이브러리가 로드되지 않았습니다.');
    }
  }

      
  useEffect(() => {
    axios.get('/user/login').then((response) => {
      const userId = response.data.data.userId;
      setUserId(userId);
      console.log("로그인부분" + userId);

    
    });
  }, []);


  useEffect(() => {
    if (userId !== '') {
      axios.get('/user/getUser/' + userId).then((response) => {
        setDBcoin(response.data.data.coin);

      });
      axios.get(`/purchase/getPurchaseList/${userId}`)
      .then((response) => {
        const purchaseData = response.data['data'];
        setPurchaseInfo(purchaseData);
        
        console.log("결제리스트 업데이트되나?"+purchaseInfo);
        console.log("결제List 부분의 데이터" + JSON.stringify(response.data));
      });
    }
  }, [userId]);


              
         
        
    
  return (
    
      <PurchaseList_div>
          <Purchase_title>결제내역</Purchase_title>
          {/* 결제 목록 */}
          <Table_title1>
              보유 하고있는 코인 <Tabke_span>{dbCoin}</Tabke_span>
          </Table_title1>
          <Purchase_table>
              <Colgroup>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
                  <Col></Col>
              </Colgroup>    
                  <Table_thead>
                      <Table_tr>
                          <Table_th>결제날짜</Table_th>
                          <Table_th>회원아이디</Table_th>
                          <Table_th>충전금액</Table_th>
                          <Table_th>결제수단</Table_th>
                      </Table_tr>
                      {purchaseInfo.map((purchase) =>(                       
                      <Table_tr key={purchase.paymentNo}>
                          <Table_td>{purchase.paymentDate}</Table_td>
                          <Table_td>{userId}</Table_td>
                          <Table_td>{purchase.paymentAmount}</Table_td>
                          <Table_td>{purchase.paymentMethod === 1 ? '네이버페이' : purchase.paymentMethod === 0 ? '카카오페이' : ''}</Table_td>
                      </Table_tr>
                      ))}
                  </Table_thead>

          </Purchase_table>
          
          
          <Button_div>
              <Purchase_button onClick={openModal}>결제하기</Purchase_button>
          </Button_div>
          {/* 모달 */}
              {isModalOpen && (
                  <div>
                  {/* 모달 내용 */}
                  <Modal isOpen={isModalOpen} onRequestClose={closeModal} >
   
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
                                  <Add_txt_span>구매할 코인</Add_txt_span>
                                  <Add_txt_span_tkName>
                                  <input
                                    type="number"
                                    value={coinAmount}
                                    onChange={(e) => {
                                      const amount = parseInt(e.target.value);
                                     
                                      setCoinAmount(amount); 
                                    }}
                                    style={{ textAlign: "right",border: "none" }}
                                  />
                                  코인
                                  </Add_txt_span_tkName>
                                  
                              </Add_dd>
                              <Add_st_dl>
                                  <Add_st_dt>보유 코인</Add_st_dt>
                                  <Add_st_dd>
                                      <Add_st_span>{dbCoin}</Add_st_span>개
                                  </Add_st_dd>
                              </Add_st_dl>
                              <Add_dd>
                                  <Add_txt_span>충전 되는 코인</Add_txt_span>
                                      <Add_coin_input></Add_coin_input>
                                  <Add_count>{coinAmount}코인</Add_count>
                              </Add_dd>
                              <Add_btn_area>
                                  <Btn_gift onClick={() => { onClickPayment(); closeModal(); }}>구매하기(코인으로)</Btn_gift>
                                  <Btn_cancel onClick={closeModal}>취소</Btn_cancel>
                              </Add_btn_area>
                          </Add_Ticket>
                  </Pop_ticket_div> 

                </Modal>
                  {/* 모달 배경 */}
                  <div onClick={closeModal} style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0, 0, 0, 0.5)', zIndex: 2 }} >
                  </div>
              </div>)}
          <br/><br/>
          <Purchase_notice_p>
              참여자가 스트리머를 응원하고 후원할 수 있는 <br/>
              유료 충전시스템입니다.<br/>
              코인으로 이용권을 구매 및 , 후원 시스템을 사용할 수 있습니다.<br/>
              후원받은 스트리머는 코인을 환전하여 실제<br/>
              수익으로 돌려 받게 됩니다.
              결제는 100원부터 가능합니다.
          </Purchase_notice_p>
      </PurchaseList_div>
  );
};


export default Exchange;