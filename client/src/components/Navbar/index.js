import React from "react";
import "./style.css";

function Navbar() {
    //Functions go here
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li>
                        Meetups
                    </li>
                    <li>
                        Dashboard
                    </li>
                    <li>
                        <a href="#logout">
                            Logout
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}


export default Navbar;