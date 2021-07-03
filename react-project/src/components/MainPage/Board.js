import axios from 'axios';
import { withRouter,Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import MainButton from './MainButton';
import Post from './Post';

const url = `https://recruit-api.yonple.com/recruit/294810/a-posts`;

function Board(){
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios.get(`${url}?page=0`)
        .then((res) => {
            setPosts(res.data);
            console.log(posts)
        })
    },[])

    return(
        <>
            <article className="flex mx-auto w-96 p-4 border rounded focus:ring focus:ring-blue-500 hover:ring-blue">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-5 text-gray-400 text-bold mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <input className="outline-none" placeholder="검색어를 입력하세요"/>
            </article>
            <article>
                <section>
                    <header className="border-b mb-2">
                        <MainButton name={"A Posts"}/>
                    </header>
                </section>
                <ul className="flex flex-col border rounded-md p-5">
                    {posts.map((post) => 
                    <Link to={`/a/${post.id}`}  key={post.id} className="hover:bg-gray-100">
                        <li className="p-5">
                            <Post post={post}/>
                        </li>
                    </Link>
                    )}
                </ul>
            </article>
        </>
    )
}

export default withRouter(Board);