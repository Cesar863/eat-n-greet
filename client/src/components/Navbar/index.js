import React from "react";
import "./style.css";

function Navbar() {
    //Functions go here
    return (
        <header>
            <nav>
                <ul className="flex-row">
                    <li>
                        <a href="#login">
                            Login
                        </a>
                    </li>
                    <li>
                        <a href="#signup">
                            Signup
                        </a>
                    </li>

                </ul>
            </nav>
        </header>
    );
}


export default Navbar;