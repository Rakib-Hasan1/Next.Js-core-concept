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
                        <li className="border px-3 py-2">Home</li>
                    </Link>
                    <Link href="/posts">
                        <li className="border px-3 py-2">Posts</li>
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