import React from "react";
import { Routes, Route } from "react-router-dom";

import About from "./Components/Pages/About";
import Home from "./Components/Pages/Home";
export default function PagesSwitch() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}
