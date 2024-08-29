import { Link, useLocation } from "react-router-dom"

export function Nav() {
    const { pathname } = useLocation();
    if (pathname === "/") return null;

    return (
        <nav>
            <ul>
                <li>
                    <Link to="/forum">Forum</Link>
                </li>
                <li>
                    <Link to="/users">Users</Link>
                </li>
                <li>
                    <Link to="/">Exit</Link>
                </li>
            </ul>
        </nav>
    )
}