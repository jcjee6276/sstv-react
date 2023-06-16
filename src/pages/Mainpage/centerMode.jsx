/* eslint-disable react-hooks/rules-of-hooks */

import { v4 as uuidv4 } from "uuid";
import Card from "./Card";
import Carousel from "./Carousel";
import './centerMode.css'
import { useEffect,useState } from "react";
import axios from 'axios';
const centerMode= ()=> {
   const userId = "user10";
   const [replayList, setReplayList] = useState([]);
   useEffect(()=>{
    axios.get('streaming/getStreamingByUserId', {
        params: {
            userId: userId,
        }
    })
    .then((response)=>{
        console.log(response.data);
        setReplayList(response.data['firstData']);
    })
  },[])
 const image = replayList[0]?.RECORD_URL.replace(".mp4","");
 console.log(process.env.REACT_APP_REPLAY_IMAGE_URL+replayList[0]?.RECORD_URL.replace(".mp4","")+".jpg")
 console.log(replayList[0]?.RECORD_URL)
  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://kr.object.ncloudstorage.com/hls/livestation/thumbnails/177816-745345-202306151134.jpg"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://kr.object.ncloudstorage.com/hls/livestation/thumbnails/177816-745345-202306151134.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/convertplus_thumbnail.jpg" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/acf_pro.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2017/12/layer_slider_plugin_thumb.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2016/08/slider_revolution-1.png" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen="https://updates.theme-fusion.com/wp-content/uploads/2019/01/pwa_880_660.jpg" />
      )
    }
  ];
  return (
    <div className="App">
      <Carousel
        cards={cards}
        height="600px"
        width="70%"
        margin="0 50"
        offset={7}
        showArrows={false}
      />
    </div>
  );
}

export default centerMode;
