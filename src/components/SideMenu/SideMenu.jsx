import React from 'react';
import './SideMenu.scss';

import {LogInMenu} from './LogInMenu/LogInMenu';
import {RegisterMenu} from './RegisterMenu/RegisterMenu';
import {MainMenu} from './MainMenu/MainMenu';

const SideMenu = ({ menuType, openCloseSideMenu,
                    closeSideMenu, openLoginMenu, 
                    openRegisterMenu, stepBackMenu}) => {

    const renderMenu = () => {
        if(menuType === 'main') {
            return <MainMenu closeSideMenu={closeSideMenu} openLoginMenu={openLoginMenu} openRegisterMenu={openRegisterMenu} />
        } else if (menuType === 'login') {
            return <LogInMenu closeSideMenu={closeSideMenu} stepBackMenu={stepBackMenu} />
        } else if (menuType === 'register') {
            return <RegisterMenu closeSideMenu={closeSideMenu} stepBackMenu={stepBackMenu} />
        }

        return null;
    }

    return (
        <div className={`sideMenu ${openCloseSideMenu ? 'open' : 'close'}`}>
            {renderMenu()}
        </div>
    )
};

export {SideMenu};