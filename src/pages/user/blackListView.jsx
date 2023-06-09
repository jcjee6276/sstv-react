import { useNavigate } from 'react-router-dom/dist';
import {User_update_Main, User_update_title, Profile_box2, Profile_add_button_box , Profile_box4, Email_update_input2, PasswordCheck_line, Password_secret, User_update_body, User_update_body2, User_update_header, User_update_header_2, User_update_logo, User_update_subTitle,User_update_titleLine, User_update_titleLine_2, User_update_body3, UserinfoTitle, UserNickname_title, Nickname_update, Nickname_update_title, Nickname_update_update, Nickname_update_title2, Nickname_update_update2, Nickname_update_input, NicknameDuplicate_button, NicknameChange_button, Nickname_update_sub, Update_form, Password_title, Password_box, Update_user_title, Update_user_box, Update_submit_button, Password_box_title, Password_box_minibox, Password_box_title2, Password_input, PasswordCheck_input, Password_input2, Password_input_mini, Password_input_line, Userinfo_tab, Info_text, User_type, Password_space, Password_box_minibox2, PasswordCheck_input2, PasswordCheck_input_input, Phone_update, Phone_update2, Phone_update_input, Phone_update_input2, Phone_update_input_text, Email_update, Email_update2, Email_update_input, Email_update_inputText1, Email_golbang, Email_update_inputText2, Email_update_selectEmail, UpdateUser_submit_button, Profile_box, Profile_box3, Profile_photo, Profile_text, Profile_photo2, Profile_photo3, Profile_add_button, Profile_add_button1, Profile_add_button2, Profile_add_button3, Profile_photo_input_button, UserInfo_tab2, UserInfo_tab3, List_title, List_title_text, Blacklist_body, Blacklist_body2, Blacklist_box, Blacklist_box2, Blacklist_box_head, Blacklist_box_Main, Blacklist_box_body, Blacklist_box_Main1, Blacklist_box_Main2, Blacklist_box_Main3, Blacklist_box_head1, Blacklist_box_head2} from './style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPoo } from '@fortawesome/free-solid-svg-icons'
import Blacklist from './blacklistModal';

const BlackListView = () => {
  const selectedTab = 'blackList';
  const navigate = useNavigate();

  console.log('현재 선택된 탭은 :: '+selectedTab)

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
            <List_title style={{ display: 'flex', alignItems: 'center' }}>
            <FontAwesomeIcon icon={faPoo} size="2xl" style={{ marginRight: '8px' }}/><p style={{ fontSize: '18px', color:'blue'}}>블랙리스트 관리</p>
            </List_title>
            <Userinfo_tab>
            <UserInfo_tab2 style={{ backgroundColor: selectedTab === 'userInfo' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>내 정보 관리</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 style={{ backgroundColor: selectedTab === 'followList' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>팔로우 관리</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 style={{ backgroundColor: selectedTab === 'blackList' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>블랙리스트 관리</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 style={{ backgroundColor: selectedTab === 'coinHistory' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>코인 사용내역</UserInfo_tab3>
            </UserInfo_tab2>
            <UserInfo_tab2 style={{ backgroundColor: selectedTab === 'removeUser' ? '#fff' : '#ccc', cursor: 'pointer' }}>
              <UserInfo_tab3>회원 탈퇴</UserInfo_tab3>
            </UserInfo_tab2>
            </Userinfo_tab>
            <Info_text>회원가입 시 입력한 정보를 조회&수정할 수 있습니다.</Info_text>

            </User_update_body3>
          </User_update_body2>
            <Blacklist/>
        </User_update_body>
        </User_update_Main>
  )
} 
export default BlackListView;