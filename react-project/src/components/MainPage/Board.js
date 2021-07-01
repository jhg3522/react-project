import axios from 'axios';
import React, { useCallback, useEffect, useState } from 'react';

function Post({post}){
    return(
        <>
            <h3 className="text-lg">
                <span className="text-blue-500 font-medium">{post.id}. </span>
                {post.title}
            </h3>
            <p className="line-clamp-3">{post.content}</p>
        </>
    );
}

function Board(){
    const [posts, setPosts] = useState([])
    const [page, setPage] = useState(0)
    const url = `https://recruit-api.yonple.com/recruit/294810/a-posts`;
    const infiniteScroll = useCallback(async () => {
        const scrollHeight = Math.max(document.documentElement.scrollHeight, document.body.scrollHeight);
        const scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
        const clientHeight = document.documentElement.clientHeight;

        if(scrollTop + clientHeight === scrollHeight) {
            setPage(page + 10);
            await axios.get(`${url}?page=${page}`).then((res) => {
                setPosts([...posts, ...res.data])
                console.log(res.data)
          })
        }
    }, [page,posts])

    useEffect(() => {
        axios.get(`${url}?page=${page}`).then((res) => {
            setPosts([...posts, ...res.data])
            console.log(res.data)
         })
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', infiniteScroll, true);
        return () => window.removeEventListener('scroll', infiniteScroll, true);
      }, [infiniteScroll]);

    return(
        <article>
            <section>
                <header className="border-b mb-2">
                    <button className="p-3 rounded outline-none appearance-none font-medium">A Posts</button>
                    <button className="p-3 rounded outline-none appearance-none font-medium">B Posts</button>
                </header>
            </section>
            <ul className="flex flex-col border rounded-md p-5">
                {posts.map((post) => 
                <a className="">
                    <li className="p-5" key={post.title}>
                        <Post post={post}/>
                    </li>
                </a>
                )}
            </ul>
        </article>
    )
}

export default Board;