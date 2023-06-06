import React, { useState, useEffect } from "react";
import ReactPaginate from 'react-paginate';
import StreamingModal from './streamingModal';
import axios from "axios";
import { Main_stream_list_img } from '../Mainpage/style';
import './style.css';




const AdminStreamingList = () => {
  const itemsPerPage = 10;
  const [modalIsOpen, setIsOpen] = useState(false);
  const [itemOffset, setItemOffset] = useState(0);

  //검색
  const [searchKeyword, setSearchKeyword] = useState('');
  const [searchCondition, setSearchCondition] = useState('0');
  
  //스트리밍 목록
  const [streamingList, setStreamingList] = useState([]);
  const [streaming, setStreaming] = useState(null);
  
  const openStreamingModal = (user) => {
    setStreaming(user)
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
        const response = await axios.get('http://localhost:3001/streaming/getAdminStreamingList', {
          params : {
            searchCondition : searchCondition,
            searchKeyword : searchKeyword
          }
        });

        return response.data.firstData;
    } catch (error) {
        alert('error = ' + error);
        console.error(error);
        return [];
    }
  }
  
  const getStreamingList = async () => {
    const response = await fetchData();
    setStreamingList(response);
  }

  useEffect(() => {
    getStreamingList();
  }, []);
  
  const handleSearchKeywordChange = (event) => {
    setSearchKeyword(event.target.value)
  }

  const hanldeSearchCondition = (event) => {
    setSearchCondition(event.target.value)
  }

  const getCategory = (categoryId) => {
    let result;
    switch(categoryId) {
        case '0':
            result = '게임';
            break;
        case '1':
            result = '일상';
            break;
        case '2':
            result = '스포츠';
            break;
        case '3':
            result = '먹방';
            break;
        case '4':
            result = '요리';
            break;
        case '5':
            result = '교육';
            break;
        default:
            break;
    }
    return result;
  }
  
  //paginate
  const AdminStreamings = ({ currentItems }) => {
    return (
      // <th>회원 닉네임</th>
      // <th>스트리밍 제목</th>
      // <th>스트리밍 카테고리</th>
      // <th>실시간 시청자수</th>
      // <th>받은 후원금액</th>
      <>
        {currentItems.map((streaming) => (
          
          <tr key={JSON.stringify(streaming.streamingPk)}>
            <td onClick={() => openStreamingModal(streaming)}><Main_stream_list_img src={streaming.thumnailUrlWithOutAd}/></td>
            <td>{streaming.userNickname}</td>
            <td>{streaming.streamingTitle}</td>
            <td>{getCategory(streaming.streamingCategory)}</td>
            <td>{streaming.streamingViewer}</td>
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

  if (streamingList != null && streamingList != undefined) {
    //paginate
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = streamingList.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(streamingList.length / itemsPerPage);

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
                      <th>썸네일</th>
                      <th>회원 닉네임</th>
                      <th>스트리밍 제목</th>
                      <th>스트리밍 카테고리</th>
                      <th>실시간 시청자수</th>
                    </tr>
                  </thead>
                  <tbody>
                    <AdminStreamings currentItems={currentItems} />
                  </tbody>
                </table>
                {modalIsOpen && <StreamingModal onClose={modalIsOpen} setOnClose={setIsOpen} data = {streaming}/>}

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
                <label htmlFor="b_subject">회원 닉네임</label>

                <input 
                    type="radio" 
                    id="b_content" 
                    name="search" 
                    value='1' 
                    checked = {searchCondition === '1'} 
                    onChange={hanldeSearchCondition}
                />
                <label htmlFor="b_content">스트리밍 제목</label>
                
                <input type="text" className="input_txt" id="searchText" value={searchKeyword} onChange={handleSearchKeywordChange} />
                <button class="list_search" id="searchWord" onClick={getStreamingList}>
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

export default AdminStreamingList;
