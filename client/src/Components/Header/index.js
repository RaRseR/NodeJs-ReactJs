import React from "react";
import { Link } from "react-router-dom";

import "./style.css";

export default function Header() {
    function showMenu(){

    }
    return (
        <header>
            <div class="wrapper header__wrapper">
                <div>
                    <a href="/">
                        <b>React+NodeJs</b>
                    </a>
                </div>
                <div>
                    <nav>
                        <button
                            class="nav__toggle"
                            aria-expanded="false"
                            type="button"
                            aria-label="menu"
                        >
                            {/* <img
                                src="images/icons/nav__toggle.svg"
                                alt="menu"
                            /> */}
                            menu
                        </button>
                        <ul class="nav__wrapper">
                            <li class="nav__item">
                                <Link to="/">Home</Link>
                            </li>
                            <li class="nav__item">
                                <Link to="/about">About</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
}
