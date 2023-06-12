import { useState } from 'react';
import {User_update_Main, User_update_title, Profile_box2, Profile_add_button_box , Profile_box4, Email_update_input2, PasswordCheck_line, Password_secret, User_update_body, User_update_body2, User_update_header, User_update_header_2, User_update_logo, User_update_subTitle,User_update_titleLine, User_update_titleLine_2, User_update_body3, UserinfoTitle, UserNickname_title, Nickname_update, Nickname_update_title, Nickname_update_update, Nickname_update_title2, Nickname_update_update2, Nickname_update_input, NicknameDuplicate_button, NicknameChange_button, Nickname_update_sub, Update_form, Password_title, Password_box, Update_user_title, Update_user_box, Update_submit_button, Password_box_title, Password_box_minibox, Password_box_title2, Password_input, PasswordCheck_input, Password_input2, Password_input_mini, Password_input_line, Userinfo_tab, Info_text, User_type, Password_space, Password_box_minibox2, PasswordCheck_input2, PasswordCheck_input_input, Phone_update, Phone_update2, Phone_update_input, Phone_update_input2, Phone_update_input_text, Email_update, Email_update2, Email_update_input, Email_update_inputText1, Email_golbang, Email_update_inputText2, Email_update_selectEmail, UpdateUser_submit_button, Profile_box, Profile_box3, Profile_photo, Profile_text, Profile_photo2, Profile_photo3, Profile_add_button, Profile_add_button1, Profile_add_button2, Profile_add_button3, Profile_photo_input_button, UserInfo_tab2, UserInfo_tab3} from '../user/style';
import { useCallback } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ReactPaginate from 'react-paginate';

const AddAd = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [userNickname, setUserNickname] = useState('');
  const [eMail, setEMail] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('');
  const inputRef = useRef(null);
  const [uploadedImage, setUploadedImage] = useState(null);
  const [dbProfilePhoto, setDbProfilePhoto] = useState('');
  const [selectedTab, setSelectedTab] = useState('userInfo'); 
  const [adReqList, setAdReqList] = useState('[]');
  const navigate = useNavigate();
  const coin =0;

  //paginate
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);
    
  const fetchData = async () => {
    try {
      // ${process.env.REACT_APP_NODE_URL}
        const response = await axios.get(`http://localhost:3001/ad/getAdReqList`, {
            params : {
                searchKeyword : userId,
                processCode : 0
            }
        });
        return response.data.firstData;
    } catch (error) {
        console.error(error);
        return [];
    }
  }

  const getAdReqList = async () => {
    const response = await fetchData();
    setAdReqList(response);
  }

  // DB에 저장된 정보 가져오기
  useEffect(() => {
    axios.get('/user/login').then((response) => {
      setUserId(response.data.data.userId);
    }).then((response) => {
      getAdReqList();
    })
  }, []);
  
  //파일 업로드
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setProfilePhoto(file);
  
    // 파일을 읽어서 이미지를 표시
    const reader = new FileReader();
    reader.onload = () => {
      setUploadedImage(reader.result);
    };
    reader.readAsDataURL(file);
    //파일 선택값 초기화
    // e.target.value = null;
  };

  //파일 재 업로드 시도할 경우 null check
  const handleClick = () => {
    if(inputRef.current !== null) {
      //파일 선택값 초기화 후 가져옮
      // inputRef.current.value = null;
      inputRef.current.click();
    }
  };

 // 프로필 사진 적용 버튼
const saveFile = useCallback(() => {
  const file = inputRef.current.files[0];
  
  const formData = new FormData();
  formData.append('file', file);
  
  //${process.env.REACT_APP_NODE_URL}/ad/addAdReq
  axios.post(`http://localhost:3001/ad//addAdReq`, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    withCredentials : true
  }).then((response) => {
    const result = response.data.result;

    if(result == 'success') {
      alert('광고가 신청되었습니다.');
    }else {
      alert('광고 신청에 실패했습니다.');
    }
  });
}, [inputRef, profilePhoto, userId]);
  
  //내 정보 관리 탭
  const onUserInfo = () => {
    setSelectedTab('userInfo');
    navigate('/userInfo/'+userId);
  }

  //블랙리스트 관리 탭
  const onBlacklist = () => {
    setSelectedTab('blackList');
    navigate('/blacklist/'+userId);
  }

  //팔로우 관리 탭
  const onFollowlist = () => {
    setSelectedTab('followList');
    navigate('/followlist/'+userId);
  }

  //회원탈퇴 탭
  const onRmUser = () => {
    setSelectedTab('removeUser');
    navigate('/remove/'+userId);
  }

  //paginate
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = adReqList.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(adReqList.length / itemsPerPage);

  const AdReqs = ({ currentItems }) => {
    return (
      <>
        {currentItems.map((adReq) => (
          <tr key={adReq.AD_REQ_NO}>
            <td >{adReq.USER_ID}</td>
            <td >{adReq.AD_REQ_DATE}</td>
            <td>{adReq.PAYMENT_COIN}</td>
          </tr>
        ))}
      </>
    )
  };

  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };


  if (adReqList != null && adReqList != undefined) {
  return(
    <User_update_Main>
    {/* header */}
      <User_update_header>
        <User_update_header_2>
          <User_update_logo>
          <img src={process.env.PUBLIC_URL +'/img/SSTV.gif'} width={150} height={65} onClick={()=> {navigate('/');}} style={{ cursor: 'pointer' }}/>
          </User_update_logo>
          <User_update_title>
      <User_update_subTitle>
          개인정보
      </User_update_subTitle>
      </User_update_title>
      <User_update_titleLine>
        <User_update_titleLine_2/>
        </User_update_titleLine>
        </User_update_header_2>
        </User_update_header>
        {/* body */}
      
        <User_update_body>
          <User_update_body2>
            <User_update_body3>
            <UserinfoTitle>내 정보 관리</UserinfoTitle>
            <Userinfo_tab>
            <UserInfo_tab2 onClick={onUserInfo} style={{ backgroundColor: selectedTab === 'userInfo' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>내 정보 관리</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 onClick={onFollowlist} style={{ backgroundColor: selectedTab === 'followList' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>팔로우 관리</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 onClick={onBlacklist} style={{ backgroundColor: selectedTab === 'blackList' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>블랙리스트 관리</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 style={{ backgroundColor: selectedTab === 'coinHistory' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>코인 사용내역</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 onClick={onRmUser} style={{ backgroundColor: selectedTab === 'removeUser' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>회원 탈퇴</UserInfo_tab3>
            </UserInfo_tab2>
            </Userinfo_tab>
            <Info_text>회원가입 시 입력한 정보를 조회&수정할 수 있습니다.</Info_text>
            <User_type></User_type>
            <UserNickname_title>광고신청</UserNickname_title>
            <Profile_box style={{ height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <Profile_box2>
                <Profile_box3>
                  <Profile_box4>
                    <Profile_photo>
                      <Profile_photo2>
                        <Profile_photo3 onClick={handleClick} style={{ cursor: 'pointer' }}>
                            <video 
                              src={uploadedImage}
                              alt="Profile"
                              width={150}
                              height={150}
                              style={{ borderRadius: '50%' }}
                            />
                        </Profile_photo3>
                      </Profile_photo2>
                    </Profile_photo>
                    <Profile_text>
                      <Profile_add_button_box style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Profile_add_button style={{ width: '100px', height: '30px' }}>
                        <Profile_add_button1>
                          <Profile_add_button2>
                            <Profile_add_button3 onClick={handleClick} style={{ cursor: 'pointer' }}>
                                <p style={{ fontSize: '12px' }}>광고영상 업로드</p>
                            </Profile_add_button3>
                            
                          <input ref={inputRef}
                              type="file"
                              onChange={handleFileInputChange}
                              style={{ display: 'none' }}
                            />
                          </Profile_add_button2>
                        </Profile_add_button1>
                        </Profile_add_button>
                      </Profile_add_button_box>
                      <Nickname_update_update2 style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                      <NicknameDuplicate_button onClick={saveFile} style={{ padding: '3px 5px', fontSize: '13px', marginTop:'10px' }}>신청하기</NicknameDuplicate_button>
                      </Nickname_update_update2>
                      <Nickname_update_sub >
                        <p style={{color:'blue'}}>- 광고 신청시 10,000의 코인이 차감됩니다.</p>
                        <p style={{color:'blue'}}>- 광고 신청이 관리자에 의해 거절되면 차감된 코인이 원상복구됩니다.</p>
                      </Nickname_update_sub>
                    </Profile_text>
                  </Profile_box4>
                </Profile_box3>
              </Profile_box2>
            </Profile_box>

              <Update_user_title>내 광고목록</Update_user_title>
              <div className="sub_wrap">
              <div className="tb_mylist">
                <table cellSpacing="0" cellPadding="0">
                  <colgroup><col width="152"/><col width="*"/><col width="120"/><col width="120"/></colgroup>
                  <thead>
                    <tr>
                      <th>신청회원ID</th>
                      <th>신청날짜</th>
                      <th>지불 코인</th>
                      <th>수락</th>
                      <th>거절</th>
                      <th>광고시청</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AdReqs currentItems={currentItems} />
                  </tbody>
                </table>
                {/* {modalIsOpen && <AdModal onClose={modalIsOpen} setOnClose={setIsOpen} data = {adReq}/>} */}
              </div>
              <ReactPaginate
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
              />
            </div>


              {/* <Update_user_box> */}  
              {/* </Update_user_box> */}
              <Update_submit_button>
                <UpdateUser_submit_button>확인</UpdateUser_submit_button>
              </Update_submit_button>
            {/* </Update_form> */}
            </User_update_body3>
          </User_update_body2>

        </User_update_body>
        </User_update_Main>
  )
}
} 
export default AddAd;