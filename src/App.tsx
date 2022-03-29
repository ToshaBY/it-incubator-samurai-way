import React from 'react';
import './App.css';
import {Header} from './components/Header';
import {Navbar} from "./components/Navbar";
import {Profile} from "./components/Profile";

export const App: React.FC<any> = (props) => {
    return (
        <div className={"app-wrapper"}>
            <Header/>
            <Navbar/>
            <Profile/>
        </div>
    );
}
