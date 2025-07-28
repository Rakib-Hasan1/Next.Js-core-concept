import Link from 'next/link';
import React from 'react'
import style from './post.module.css'
// import Image from 'next/image';

export const getPosts = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    return data;
};

export const metadata = {
    title: "All Posts",
    description: "Loading json placeholder posts using server component",
};

export default async function posts() {
    const posts = await getPosts();
    return (
        <div className='grid grid-cols-4 gap-6 p-10'>
            {
                posts.map(post => {
                    return (
                        <div key={post.id}>
                            <div className={`p-4 border border-gray-300 bg-gray-100 shadow rounded-md testing-styles`}>
                                {/* <Image src={post?.strMealThumb} width={640} height={640} alt={post?.title} /> */}
                                <p className={`font-extrabold text-3xl ${style["post-title"]}`}> <strong>Title:</strong> {post.title}</p>
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
