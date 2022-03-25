import { Link } from "react-router-dom";
import React from "react";
import './Navbar.css';

const Navbar = () => {
    return(
        <div class="header">
                <Link to="/home"><p>Home</p></Link>
                <Link to="/dashboard"><p>Dashboard</p></Link>
        </div>
    );

}

export default Navbar