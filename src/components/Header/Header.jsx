import React, {Component} from 'react';
import './Header.scss';

import logo from '../../assets/logo.png';
import {Search} from '../Search/Search';
import {Btn} from '../Btn/Btn';
import { DarkModeBtn } from '../DarkModeBtn/DarkModeBtn';
import {SideMenu} from '../SideMenu/SideMenu';


class Header extends Component {

        state = {
            openCloseSideMenu : false,
            menuType : 'main'
        };

    openCloseSideMenu = () => {
        this.setState({
            openCloseSideMenu : !this.state.openCloseSideMenu,
            menuType : "main" // osim kada bude bio user ulogovan
        })
    }

    closeSideMenu = () => {
        this.setState({
            openCloseSideMenu : !this.state.openCloseSideMenu,
            menuType : "main" // osim kada bude bio user ulogovan
        })
    }

    openLoginMenu = () => {
        this.setState({
            menuType : "login"
        })
    }

    openRegisterMenu = () => {
        this.setState({
            menuType : "register"
        })
    }

    stepBackMenu = () => {
        this.setState({
            menuType : "main"
        })
    }

    render () {

        const { openCloseSideMenu, menuType } = this.state;

        return (
            <header className="header">
                <img className="logo" src={logo} alt="logo" />
                <Search />
                <div className="header__controls">
                    <DarkModeBtn />
                    <Btn iconType="FaUserCircle" clickBtn={this.openCloseSideMenu} />
                </div>
                    <SideMenu 
                        menuType={menuType}
                        closeSideMenu={this.closeSideMenu} 
                        openCloseSideMenu={openCloseSideMenu}
                        openLoginMenu={this.openLoginMenu}
                        openRegisterMenu={this.openRegisterMenu}
                        stepBackMenu={this.stepBackMenu}
                    />
            </header>
        )
    }
}

export {Header};