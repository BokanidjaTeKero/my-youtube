import React from 'react';
import './MainMenu.scss';

import {Btn} from '../../Btn/Btn';
import { FlipCard } from '../FlipCard/FlipCard';

const MainMenu = ({closeSideMenu,openLoginMenu,openRegisterMenu}) => {

    return(
        <div className="mainMenu">
            <div className="mainMenu__user-form-container">
                <FlipCard 
                    textDisclaimer="This is an optional menu. 
                                    Please choose whether you want 
                                    to log in to your profile or 
                                    whether you want to create a 
                                    new one if you do not have one." 
                />
                <h3>Main Menu</h3>
                <p className="menuOptions" onClick={openLoginMenu}>Log in</p>
                <p className="menuOptions" onClick={openRegisterMenu}>Register</p>
            </div>
            <div className="mainMenu__user-controls">
                <Btn iconType="IoIosArrowUp" clickBtn={closeSideMenu} />
            </div>
        </div>
    )
}

export {MainMenu};