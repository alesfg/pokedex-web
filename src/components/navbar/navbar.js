import React from "react";
import './navbar.css';
import snorlax from '../../assets/pokedex-icon.png';

const Navbar = () => {

    return (
        <div className="nav">
            <img src={snorlax} alt="pokedex-icon"/>        
            <nav>
                HOME
            </nav>
        </div>
    )
}

export default Navbar