import axios from 'axios';
import { withRouter,Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useInView } from "react-intersection-observer"
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import React, { useCallback, useEffect, useState } from 'react';
import MainButton from './MainButton';
import Post from './Post';

const url = `https://recruit-api.yonple.com/recruit/294810/a-posts`;

function Board(){
    const [posts, setPosts] = useState([]);
    const [search, setSearch] = useState('');
    const [pageNumber,setPageNumber] = useState(0)
    const [ref, inView] = useInView()

    const getPosts = useCallback(async() => {
        axios.get(`${url}?page=${pageNumber}&search=${search}`)
        .then((res) => {
            setPosts(res.data)
            console.log(res.data)
        })
    },[search,pageNumber])

    const getNewPosts = useCallback(async () => {
        axios.get(`${url}?page=${pageNumber}&search=${search}`)
        .then((res) => {
            setPosts(prevState => [...prevState, res.data])
        })
    },[pageNumber])

    useEffect(() => {
        getNewPosts()
      }, [getNewPosts])

    useEffect(() => {
        if (inView) {
            setPageNumber(prevState => prevState + 1)
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
                <form className="flex w-full rounded md:ml-0 h-12  hover:ring-1">
                    <figure className="relative w-full border rounded flex">
                        <i className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-gray-400"><FontAwesomeIcon icon={faSearch} className="search" /></i>
                        <input className="block w-full h-full pl-8 outline-none focus:ring-1 focus:border-transparent focus:ring-blue-400" type="text" onChange={handleSearch}  placeholder="검색어를 입력하세요"/>
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
                    {posts.map((post,idx) => {
                        {posts.length -1 == idx 
                        ?
                        <Link ref={ref} to={`/a/${post.id}`} key={idx} className="hover:bg-gray-100">
                            <li className="p-5">
                                <Post post={post}/>
                            </li>
                        </Link>
                        :
                        <Link to={`/a/${post.id}`} key={idx} className="hover:bg-gray-100">
                            <li className="p-5">
                                <Post post={post}/>
                            </li>
                        </Link>
                        }
                    }
                    )}
                </ul>
            </article>
        </>
    )
}

export default withRouter(Board);