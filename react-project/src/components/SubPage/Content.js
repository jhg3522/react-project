import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'; 
const url = `https://recruit-api.yonple.com/recruit/294810/a-posts`;

function Content({history, match}){
    const [post, setPost]= useState([])
    const {id} = match.params
    useEffect(() => {
        axios.get(`${url}/${id}`)
        .then((res) => {
            setPost(res.data);
        })
    },[])
    
    return(
        <div>
            <h3 className="text-lg">
            <span className="text-blue-500 font-medium">{post.id}. </span>
            {post.title}
            </h3>
            <p className="line-clamp-3">{post.content}</p>
            <button onClick={() => history.goBack()}>뒤로가기</button>
        </div>
    );
}

export default withRouter(Content);