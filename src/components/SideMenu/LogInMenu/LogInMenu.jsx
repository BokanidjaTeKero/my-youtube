import React from 'react';
import './LogInMenu.scss';

import {Btn} from '../../Btn/Btn';
import { FlipCard } from '../FlipCard/FlipCard';

const LogInMenu = () => {

    

    return(
        <div className="logInMenu">
            <Btn className="logInMenu__step-back-btn" iconType="IoIosArrowBack" />
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
                <Btn iconType="GoCheck" />
                <Btn iconType="IoIosArrowUp" />
            </div>
        </div>
    )
}

export {LogInMenu};