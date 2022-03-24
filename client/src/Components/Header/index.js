import React from 'react';
import "./style.css";
import {Link} from "react-router-dom";

export default function Header() {
    return (
        <header>
            <div>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                </ul>
            </div>
        </header>
    );
}