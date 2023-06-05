import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import AdModal from './adModal';
import axios from "axios";
import {create} from 'zustand';
import Modal from 'react-modal';
import './style.css';


const Ad = () => {
  const itemsPerPage = 10;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [adList, setAdList] = useState([]);
  const [ad, setAd] = useState([]);


  //modal
  const openAdModal = (adReq) => {
    setAd(adReq);
    openModal();
  }

  const openModal = () => {
    setIsOpen(true);
  }

  const closeModal = () => {
    setIsOpen(false);
  }

  //광고신청목록 가져오기
  const fetchData = async () => {
    try {
        const response = await axios.get('http://localhost:3001/ad/getAdList');
        return response.data.firstData;
    } catch (error) {
        console.error(error);
        alert('error = ' + error);
        return [];
    }
  }
  
  const getAdList = async () => {
    const response = await fetchData();
    setAdList(response);
  }

  useEffect(() => {
    getAdList();
  }, []);
  
  //검색창 입력
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value)
  }


  //paginate
  const Ads = ({ currentItems }) => {
    return (
      <>
        {currentItems.map((adReq) => (
          // <th>신청회원ID</th>
          // <th>신청날짜</th>
          // <th>지불 코인</th>
          // <th>광고 재생횟수</th>
          // <th>재생된 스트리밍수</th>
          // <th>시청한 회원수</th>
          // <th>광고시청</th>
          <tr key={adReq.AD_REQ_NO}>
            <td >{adReq.USER_ID}</td>
            <td >{adReq.AD_REQ_DATE}</td>
            <td>{adReq.PAYMENT_COIN}</td>
            <td>{adReq.AD_PLAYS_COUNT}</td>
            <td>{adReq.AD_STREAMING_PLAYS_COUNT}</td>
            <td>{adReq.AD_TOTAL_VIEWERS}</td>
            <td onClick={() => openAdModal(adReq)}>광고시청</td>
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

  if (adList != null && adList != undefined) {
    //paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = adList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(adList.length / itemsPerPage);

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
                      <th>신청회원ID</th>
                      <th>신청날짜</th>
                      <th>지불 코인</th>
                      <th>광고 재생횟수</th>
                      <th>재생된 스트리밍수</th>
                      <th>시청한 회원수</th>
                      <th>광고시청</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Ads currentItems={currentItems} />
                  </tbody>
                </table>
                {modalIsOpen && <AdModal onClose={modalIsOpen} setOnClose={setIsOpen} data = {ad}/>}
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

                {/* <input 
                    type="radio" 
                    id="b_subject" 
                    name="search" 
                    value='0' 
                    checked = {searchUserType === '0'} 
                    onChange={hanldeSearchUserTypeChange}
                />
                <label htmlFor="b_subject">신고자ID</label>

                <input 
                    type="radio" 
                    id="b_content" 
                    name="search" 
                    value='1' 
                    checked = {searchUserType === '1'} 
                    onChange={hanldeSearchUserTypeChange}
                />
                <label htmlFor="b_content">피신고자ID</label> */}
                
                <input type="text" className="input_txt" id="searchText" value={searchKeyword} onChange={handleSearchKeywordChange} />
                <button class="list_search" id="searchWord" onClick={getAdList}>
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

export default Ad;
