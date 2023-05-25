import React, { useEffect, useState } from 'react';
import Header from './header';
import { Sidebar_Main_div } from './style';
import Sidebar from './sidebar';
import axios from 'axios';
import useSWR from 'swr';
import fetcher from '../utils/fetcher';
import { useParams, useNavigate } from 'react-router-dom';

const Community = () => {
    const navigate = useNavigate();
    const {data} = useSWR('/user/login', fetcher);
    const {userId} = useParams();
    const [blackList, setBlackList] = useState([]);
    const [blackUser, setBlackUser] = useState(false);
    const sessionUser = data?.userId;
    console.log("pp"+userId);
    useEffect(()=> {
        axios.get('/fan/getBlackList/'+userId)
        .then((response)=> {
            const black = response.data;
            setBlackList(black['data']);
        })
    },[userId])
    console.log(blackList);
    for(let i =0; i<blackList.length; i++){
        if(blackList[i]===sessionUser) {
            navigate('/');
        }
    }
    console.log("블랙유저:"+blackUser);
    
    return(
        <body>
       <Header/>
       <Sidebar_Main_div>
            <Sidebar/>
       </Sidebar_Main_div>
       </body>
    )
}

export default Community;