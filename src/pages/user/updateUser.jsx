import {User_update_Main, User_update_title, Email_update_input2, PasswordCheck_line, Password_secret, User_update_body, User_update_body2, User_update_header, User_update_header_2, User_update_logo, User_update_subTitle,User_update_titleLine, User_update_titleLine_2, User_update_body3, UserinfoTitle, UserNickname_title, Nickname_update, Nickname_update_title, Nickname_update_update, Nickname_update_title2, Nickname_update_update2, Nickname_update_input, NicknameDuplicate_button, NicknameChange_button, Nickname_update_sub, Update_form, Password_title, Password_box, Update_user_title, Update_user_box, Update_submit_button, Password_box_title, Password_box_minibox, Password_box_title2, Password_input, PasswordCheck_input, Password_input2, Password_input_mini, Password_input_line, Userinfo_tab, Info_text, User_type, Password_space, Password_box_minibox2, PasswordCheck_input2, PasswordCheck_input_input, Phone_update, Phone_update2, Phone_update_input, Phone_update_input2, Phone_update_input_text, Email_update, Email_update2, Email_update_input, Email_update_inputText1, Email_golbang, Email_update_inputText2, Email_update_selectEmail, UpdateUser_submit_button} from './style';

const updateUser = () => {


  return(

    <User_update_Main>
    {/* header */}
      <User_update_header>
        <User_update_header_2>
          <User_update_logo>
          <img src={process.env.PUBLIC_URL +'/img/SSTV.gif'} width={150} height={65} />
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
            <Userinfo_tab></Userinfo_tab>
            <Info_text>회원가입 시 입력한 정보를 조회&수정할 수 있습니다.</Info_text>
            <User_type></User_type>
            <UserNickname_title>닉네임 설정</UserNickname_title>
            <Nickname_update>
              <Nickname_update_title>
                <Nickname_update_title2>닉네임 설정</Nickname_update_title2>
              </Nickname_update_title>
              <Nickname_update_update>
                <Nickname_update_update2>
                  <Nickname_update_input placeholder='닉네임'></Nickname_update_input>
                  <NicknameDuplicate_button>중복확인</NicknameDuplicate_button>
                  <NicknameChange_button>닉네임 변경</NicknameChange_button>
                  <Nickname_update_sub>- 방송이나 채팅 및 게시글 작성시 보이는 닉네임입니다.</Nickname_update_sub>
                </Nickname_update_update2>
              </Nickname_update_update>
            </Nickname_update>
            <Update_form>
              <Password_title>비밀번호 설정</Password_title>
              <Password_space></Password_space>
              <Password_space></Password_space>
              <Password_box>
                <Password_box_title>
                  <Password_box_title2>비밀번호 설정</Password_box_title2>
                </Password_box_title>
                <Password_box_minibox>
                  <Password_box_minibox2/>
                  <Password_input>
                    <Password_input2 placeholder='새 비밀번호'></Password_input2>
                    <Password_input_mini>영문/숫자/특수문자 조합으로 15자 미만</Password_input_mini>
                    <Password_input_line/>
                  </Password_input>
                  <PasswordCheck_input>
                    <PasswordCheck_input_input placeholder='새 비밀번호 확인'></PasswordCheck_input_input>
                    <PasswordCheck_line/>
                  </PasswordCheck_input>
                  <Password_secret/>
                </Password_box_minibox>
              </Password_box>
              <Update_user_title>개인정보 수정</Update_user_title>
              <Update_user_box>
                <Phone_update>
                  <Phone_update2>휴대폰 번호</Phone_update2>
                </Phone_update>
                <Phone_update_input>
                  <Phone_update_input2>
                    <Phone_update_input_text placeholder='01012341234'></Phone_update_input_text>
                  </Phone_update_input2>
                </Phone_update_input>
                <Email_update>
                  <Email_update2>이메일</Email_update2>
                </Email_update>
                <Email_update_input>
                  <Email_update_input2>
                    <Email_update_inputText1 placeholder='메일주소'/>
                    <Email_golbang>@</Email_golbang>
                    <Email_update_inputText2 placeholder='메일주소'/>
                    <Email_update_selectEmail>
                      <option>메일주소선택</option>
                      <option value="naver.com">naver.com</option>
                      <option value="self">직접입력</option>
                    </Email_update_selectEmail>
                  </Email_update_input2>
                </Email_update_input>
              </Update_user_box>
              <Update_submit_button>
                <UpdateUser_submit_button>확인</UpdateUser_submit_button>
              </Update_submit_button>
            </Update_form>
            </User_update_body3>
          </User_update_body2>

        </User_update_body>
        </User_update_Main>
  )
} 
export default updateUser;