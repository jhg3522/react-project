import React from 'react'

export default function Post({post}) {
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
