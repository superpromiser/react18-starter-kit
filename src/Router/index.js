import React from "react";
import { Routes, Route } from "react-router-dom";
import {Header} from '../Components/Header';
import {Footer} from '../Components/Footer'
import { Welcome } from "../Pages/Welcome";
import { Home } from "../Pages/Home";

export const Router = () => {
    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element="Welcome" />
            <Route path="/home" element="Home" />
        </Routes>
        <Footer />
        </>
    )
}