import Link from 'next/link';
import React from 'react'

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    return data;
}

export default async function posts() {
    const posts = await getPosts();
    return (
        <div className='grid grid-cols-4 gap-6 p-10'>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <div className='p-4 border border-gray-300 bg-gray-100 shadow rounded-md'>
                                <p> <strong>Title:</strong> {post.title}</p>
                                <p> <strong>Details: </strong> {post.body}</p>
                                <button className='mt-5'><Link href={`/posts/${post.id}`} className='bg-green-300 border border-gray-300 px-3 py-2 rounded-md'>Details</Link></button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
