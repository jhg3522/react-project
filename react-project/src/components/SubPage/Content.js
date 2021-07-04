import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom'; 
const url = `https://recruit-api.yonple.com/recruit/${process.env.REACT_APP_TOKEN}/a-posts`;

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
        <>
            <article className="border p-10 mb-4">
                <header>
                    <h2 className="font-medium text-center text-4xl mb-10">{post.title}</h2>
                </header>
                <div>
                    <p>{post.content}</p>
                </div>
            </article>
            <button className="rounded-md bg-blue-500 font-medium text-white py-2 px-6 hover:bg-blue-400 hover:shadow-md transition-all duration-150 ease-in-out" onClick={() => history.goBack()}>뒤로가기</button>
        </>
    );
}

export default withRouter(Content);