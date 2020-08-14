import React from 'react';
import './LogInMenu.scss';

import {Btn} from '../../Btn/Btn';
import { FlipCard } from '../FlipCard/FlipCard';

const LogInMenu = ({closeSideMenu, stepBackMenu}) => {

    return(
        <div className="logInMenu">
            <div className="logInMenu__user-form-container">
                <FlipCard 
                    textDisclaimer="Log in to access your profile as well
                                    as your favorite videos. If you do
                                    not have a profile, take a step
                                    back and register." 
                />
                <h3>Login</h3>
                <input type="email" placeholder="Email ..." />
                <input type="password" placeholder="Password ..." />
            </div>
            <div className="logInMenu__user-controls">
                <Btn 
                    className="logInMenu__step-back-btn" 
                    iconType="IoIosArrowBack"
                    clickBtn={stepBackMenu}
                />
                <Btn iconType="GoCheck" />
                <Btn iconType="IoIosArrowUp" clickBtn={closeSideMenu} />
            </div>
        </div>
    )
}

export {LogInMenu};