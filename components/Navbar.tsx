import React from "react"
import Link from "next/dist/client/link"

export default function Navbar (){

    return (
        <nav>
            <h1 className="title">
                <Link href="/">
                    <a>TinyApp</a>
                </Link>
            </h1>
            <h1 className="title">
                <Link href="/urls">
                    <a>My URLs</a>
                </Link>
            </h1>
            <h1 className="title">
                <Link href="/create">
                    <a>Create New URL</a>
                </Link>
            </h1>
            <h1 className="title">
                <Link href="/register">
                    <a>Register</a>
                </Link>
            </h1>
            <h1 className="title">
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </h1>
        </nav>
    )
}