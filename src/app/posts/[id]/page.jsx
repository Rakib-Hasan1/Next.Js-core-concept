import React from 'react'

export const getPost = async (post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`);
    const data = await res.json()
    return data;
}

export default async function SinglePost({ params }) {
    const p = await params;
    const post = await getPost(p.id);
    return (
        <div className='border border-slate-200 rounded-md p-6 m-5 bg-gray-100'>
            <p className=''> <strong>Data:</strong> {JSON.stringify(post)}</p>
            <br />
            <h1 className='text-2xl'> <strong>Title:</strong> {post.title}</h1>
            <h1> <strong>Body: </strong> {post.body}</h1>
        </div>
    )
}
