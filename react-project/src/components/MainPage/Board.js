import axios from 'axios';
import { withRouter,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInView } from "react-intersection-observer"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useState } from 'react';
import MainButton from './MainButton';
import Post from './Post';

const url = `https://recruit-api.yonple.com/recruit/${process.env.REACT_APP_TOKEN}/a-posts`;
function Board(){
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [pageNumber,setPageNumber] = useState(0)
    const [ref, inView] = useInView()

    const getPosts = useCallback(async() => {
        await axios.get(`${url}?page=${pageNumber}&search=${search}`)
        .then((res) => {
            setPosts((prev) => [...prev, ...res.data])
        })
    },[search,pageNumber])

    useEffect(() => {
        if (inView && pageNumber != 9) {
            setTimeout(() => {
                setPageNumber(pageNumber + 1);
              }, 100);
        }
    }, [inView])

    function handleSearch(e){
        setSearch(e.target.value)
        setPosts([])
        setPageNumber(0)
    }

    useEffect(() => {
        getPosts()
    }, [getPosts])

    return(
        <>
            <article className="mx-auto w-96">
                <form className="flex w-full  md:ml-0 h-12 ">
                    <figure className="relative hover:border-blue-500 w-full border flex">
                        <i className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400"><FontAwesomeIcon icon={faSearch} className="search" /></i>
                        <input className="block w-full h-full pl-8 outline-none focus:ring-1 focus:border-transparent focus:ring-blue-500" type="text" onChange={handleSearch}  placeholder="검색어를 입력하세요"/>
                    </figure>
                </form>
            </article>
            <article>
                <section>
                    <header className="border-b mb-2">
                        <MainButton name={"A Posts"}/>
                    </header>
                </section>
                <ul className="flex flex-col border rounded-md p-5">
                    {posts.map((post, idx) =>
                            idx !== posts.length - 1 ? (
                            <Link to={`/a/${post.id}`} key={idx} className="transition-colors duration-150 ease-in-out hover:bg-gray-100">
                                <li className="p-5">
                                    <Post post={post} />
                                </li>
                            </Link>
                            ) : (
                            <Link ref={ref} to={`/a/${post.id}`} key={idx} className="transition-colors duration-150 ease-in-out hover:bg-gray-100">
                                <li className="p-5">
                                    <Post post={post} />
                                </li>
                            </Link>
                            )
                        )}
                </ul>
            </article>
        </>
    )
}

export default withRouter(Board);