import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from 'react-paginate';
import StreamingRollBanModal from './streamingRollBanModal';
import axios from "axios";
import './style.css';



const StreamingRollBanList = () => {
  //paginate
  const itemsPerPage = 10;
  const [itemOffset, setItemOffset] = useState(0);

  //modal
  const [modalIsOpen, setIsOpen] = useState(false);
  
  //search
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchCondition, setSearchCondition] = useState('0');

  //StreamingRollBanList
  const [streamingRollBanList, setStreamingRollBanList] = useState([]);
  const [streamingRollBan, setStreamingRollBan] = useState(null);
  
  const openStreamingRollBanModal = (streamingRollBan) => {
    setStreamingRollBan(streamingRollBan);
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
        const response = await axios.get('http://localhost:3001/ban/getStreamingRollBanList', {
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

  const removeStreamingRollBan = async (streamingRollBanNo, userId) => {
    const response =  await axios.get('http://localhost:3001/ban/removeStreamingRollBan', {
      params : {
        streamingRollBanNo : streamingRollBanNo,
        userId : userId
      }
    });

    const result = response.data.result
    if(result == 'success') {
      getStreamingRollBanList();
    }
  }
  
  const getStreamingRollBanList = async () => {
    const response = await fetchData();
    setStreamingRollBanList(response);
  }

  useEffect(() => {
    getStreamingRollBanList();
  }, []);
  
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value)
  }

  const hanldeSearchUserTypeChange = (event) => {
    setSearchCondition(event.target.value)
  }

  const getReportType = (reportCode) => {
    let reportType;

    switch (reportCode) {
      case 1:
        reportType = '불법/음란';
        break;
      case 2:
        reportType = '저작권 침해';
        break;
      case 3:
        reportType = '명예훼손';
        break;
      case 4:
        reportType = '청소년 유해';
        break;
      case 5:
        reportType = '기타';
        break;
      default:
        break;
    }
    return reportType;
  }

  //paginate
  const StreamingRollBans = ({ currentItems }) => {
    return (
      // <th>회원 닉네임</th>
      // <th>회원 아이디</th>
      // <th>정지 유형</th>
      // <th>정지 시작일</th>
      // <th>정지 만료일</th>
      <>
        {currentItems.map((streamingRollBan) => (
          
          <tr key={streamingRollBan.STREAMING_ROLE_BAN_NO}>
            <td onClick={() => openStreamingRollBanModal(streamingRollBan)}>{streamingRollBan.USER_NICKNAME}</td>
            <td>{streamingRollBan.USER_ID}</td>
            <td>{getReportType(streamingRollBan.BAN_TYPE)}</td>
            <td>{streamingRollBan.BAN_START_DATE}</td>
            <td>{streamingRollBan.BAN_END_DATE}</td>
            <td onClick={() => removeStreamingRollBan(streamingRollBan.STREAMING_ROLE_BAN_NO, streamingRollBan.USER_ID)}><FontAwesomeIcon icon={faTrash} className="fa-2x"/></td>
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

  if (streamingRollBanList != null && streamingRollBanList != undefined) {
    //paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = streamingRollBanList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(streamingRollBanList.length / itemsPerPage);

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
                      <th>회원 닉네임</th>
                      <th>회원 아이디</th>
                      <th>정지 유형</th>
                      <th>정지 시작일</th>
                      <th>정지 만료일</th>
                      <th>정지 해제</th>
                    </tr>
                  </thead>
                  <tbody>
                    <StreamingRollBans currentItems={currentItems} />
                  </tbody>
                </table>
                {modalIsOpen && <StreamingRollBanModal onClose={modalIsOpen} setOnClose={setIsOpen} data = {streamingRollBan}/>}
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
                    onChange={hanldeSearchUserTypeChange}
                />
                <label htmlFor="b_subject">회원ID</label>

                <input 
                    type="radio" 
                    id="b_content" 
                    name="search" 
                    value='1' 
                    checked = {searchCondition === '1'} 
                    onChange={hanldeSearchUserTypeChange}
                />
                <label htmlFor="b_content">회원 닉네임</label>
                
                <input type="text" className="input_txt" id="searchText" value={searchKeyword} onChange={handleSearchKeywordChange} />
                <button class="list_search" id="searchWord" onClick={getStreamingRollBanList}>
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

export default StreamingRollBanList;
