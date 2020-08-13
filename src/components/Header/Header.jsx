import React from 'react';
import './Header.scss';

import logo from '../../assets/logo.png';
import {Search} from '../Search/Search';
import {Btn} from '../Btn/Btn';
import { DarkModeBtn } from '../DarkModeBtn/DarkModeBtn';
import { SideMenu } from '../SideMenu/SideMenu';

const Header = ({black, search, onPrint}) => {
    
    // const renderSearch = () => {
    //     if(search) {
    //         return <Search />;
    //     } 
    //     return null;
    // }

    return (
        <header className={`header ${black ? 'black' : 'gray'}`}>
            <img className="logo" src={logo} alt="logo" />
            {/* {renderSearch()} */}
            <Search />
            <div className="header__controls">
                <DarkModeBtn />
                <Btn iconType="FaUserCircle" />
            </div>
            <SideMenu />
            
            {onPrint("Text for printing")}
        </header>
    )
}

export {Header};