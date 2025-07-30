"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
    const pathname = usePathname();
    console.log(pathname, pathname.includes("dashboard"));
    if (!pathname.includes("dashboard")) {
        return <div>
            <nav>
                <ul className="h-18 flex justify-center items-center gap-6">
                    <Link href="/">
                        <li className="transition-all duration-300 border border-gray-100 px-3 py-2 rounded-md   hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 cursor-pointer">Home</li>
                    </Link>
                    <Link href="/posts">
                        <li className="border border-gray-100 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 cursor-pointer">Posts</li>
                    </Link>
                    <Link href="/meals">
                        <li className="border border-gray-100 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 cursor-pointer">meals</li>
                    </Link>
                    <Link href="/products">
                        <li className="border border-gray-100 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 cursor-pointer">Products</li>
                    </Link>
                    <Link href="/products/add">
                        <li className="border border-gray-100 px-3 py-2 rounded-md transition-all duration-300 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 cursor-pointer">Add Products</li>
                    </Link>


                    {/* <Link href="/about">
                        <li className="border px-3 py-2">About</li>
                    </Link> */}

                    {/* <li className="border px-3 py-2">About</li>
          <li className="border px-3 py-2">Contact Us</li>
          <li className="border px-3 py-2">Dashboard</li> */}
                </ul>
            </nav>
        </div>
    }
    else {
        return <></>
    }
};