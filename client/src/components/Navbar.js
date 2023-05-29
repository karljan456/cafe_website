import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {

    const [active, setClass] = useState()

    return (<nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">
                <img src={require("../assets/coffee_logo.png")} alt="Logo" width="80" class="d-inline-block align-text-top" />
            </Link>
            <div className="nav navbar-nav navbar-left col-8" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link" aria-current="page" to="/" onMouseOver={
                            () => setClass(active)}
                        >Menu</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/locationandhours" onMouseOver={
                            () => setClass(active)}
                        >Location & Hours</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/contactus" onMouseOver={
                            () => setClass(active)}
                        >Contact Us</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>);

}