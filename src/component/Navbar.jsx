import { Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar" aria-label="Main Navigation">
            <Link to="/" className="logo" aria-label="Homepage">
                Choco
            </Link>

            <ul className="nav-links">
                <li>
                    <Link to="/" aria-label="Home Page">Home</Link>
                </li>
                <li>
                    <Link to="/Contact" aria-label="Contact Page">Contact</Link>
                </li>
                <li>
                    <Link to="/About" aria-label="About Page">About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;