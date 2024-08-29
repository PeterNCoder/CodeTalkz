import { Link } from "react-router-dom"

export function Home() {
    return (
        <>
            <h1>CodeTalkz</h1>
            <Link to="/forum">Click To Enter</Link>
        </>
    )
}