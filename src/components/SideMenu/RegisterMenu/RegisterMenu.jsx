import React from 'react';
import './RegisterMenu.scss';

import {Btn} from '../../Btn/Btn';
import { FlipCard } from '../FlipCard/FlipCard';

const RegisterMenu = ({closeSideMenu,stepBackMenu}) => {

    return(
        <div className="registerMenu">
            <div className="registerMenu__user-form-container">
                <FlipCard 
                    textDisclaimer="Create your profile by registering. 
                                    You open up the possibilities of favoring
                                    clips and making your favorite list
                                    of video clips." 
                />
                <h3>Register</h3>
                <input type="email" placeholder="Email ..." />
                <input type="password" placeholder="Password ..." />
            </div>
            <div className="registerMenu__user-controls">
                <Btn 
                    className="registerMenu__step-back-btn" 
                    iconType="IoIosArrowBack" 
                    clickBtn={stepBackMenu}
                />
                <Btn iconType="GoCheck" />
                <Btn iconType="IoIosArrowUp" clickBtn={closeSideMenu} />
            </div>
        </div>
    )
}

export {RegisterMenu};