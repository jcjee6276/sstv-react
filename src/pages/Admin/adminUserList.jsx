import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import UserModal from './userModal';
import axios from "axios";
import Modal from 'react-modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import './style.css';



const Report = () => {
  const itemsPerPage = 10;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  //검색
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchCondition, setSearchCondition] = useState('0');
  
  //회원목록
  const [userList, setUserList] = useState([]);
  const [user, setUser] = useState(null);
  
  const openUserModal = (user) => {
    setUser(user)
    openModal();
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/user/getAdminUserList', {
          params : {
            searchCondition : searchCondition,
            searchKeyword : searchKeyword
          }
        });

        return response.data.firstData;
    } catch (error) {
        console.error(error);
        return [];
    }
  }

  // const removeReport = async (reportNo) => {
  //   const response =  await axios.get('http://localhost:3001/report/removeReport', {
  //     params : {
  //       reportNo : reportNo
  //     }
  //   });

  //   const result = response.data.result
    
  //   if(result == 'success') {
  //     getReportList();
  //   }
  // }
  
  const getUserList = async () => {
    const response = await fetchData();
    setUserList(response);
  }

  useEffect(() => {
    getUserList();
  }, []);
  
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value)
  }

  const hanldeSearchCondition = (event) => {
    setSearchCondition(event.target.value)
  }
  
  //paginate
  const Users = ({ currentItems }) => {
    return (
                      // <th>회원ID</th>
                      // <th>회원 닉네임</th>
                      // <th>회원 이름</th>
                      // <th>생년월일</th>
                      // <th>이메일</th>
                      // <th>전화번호</th>
                      // <th>가입일자</th>
      <>
        {currentItems.map((user) => (
          
          <tr key={JSON.stringify(user.USER_ID)}>
            <td onClick={() => openUserModal(user)}>{user.USER_NAME}</td>
            <td>{user.USER_NICKNAME}</td>
            <td onClick={() => openUserModal(user)}>{user.USER_ID}</td>
            <td>{user.DATE_BIRTH}</td>
            <td>{user.EMAIL}</td>
            <td>{user.PHONE}</td>
            <td>{user.SIGN_DATE}</td>
          </tr>
        ))}
      </>
    )
  };

  //paginate
  const handlePageClick = (event) => {
    const newOffset = event.selected * itemsPerPage;
    setItemOffset(newOffset);
  };

  if (userList != null && userList != undefined) {
    //paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = userList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(userList.length / itemsPerPage);

    return (
      <div>
        <div id="content" className="help">
          <div className="sub_area">
            <div className="stop_area">
              <h4><img src="https://res.afreecatv.com/images/help/img_my.jpg" alt="회원 신고목록" /></h4>
            </div>
            
            <div className="sub_wrap">
              <div className="tb_mylist">
                <table cellSpacing="0" cellPadding="0">
                  <colgroup><col width="152"/><col width="*"/><col width="120"/><col width="120"/></colgroup>
                  <thead>
                    <tr>
                      <th>회원 이름</th>
                      <th>회원 닉네임</th>
                      <th>회원ID</th>
                      <th>생년월일</th>
                      <th>이메일</th>
                      <th>전화번호</th>
                      <th>가입일자</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Users currentItems={currentItems} />
                  </tbody>
                </table>
                {modalIsOpen && <UserModal onClose={modalIsOpen} setOnClose={setIsOpen} data = {user}/>}

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
              <div className="search_area">

                <input 
                    type="radio" 
                    id="b_subject" 
                    name="search" 
                    value='0' 
                    checked = {searchCondition === '0'} 
                    onChange={hanldeSearchCondition}
                />
                <label htmlFor="b_subject">회원이름</label>

                <input 
                    type="radio" 
                    id="b_content" 
                    name="search" 
                    value='1' 
                    checked = {searchCondition === '1'} 
                    onChange={hanldeSearchCondition}
                />
                <label htmlFor="b_content">회원닉네임</label>
                
                <input type="text" className="input_txt" id="searchText" value={searchKeyword} onChange={handleSearchKeywordChange} />
                <button class="list_search" id="searchWord" onClick={getUserList}>
                  <span>검색</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return null;
}

export default Report;
