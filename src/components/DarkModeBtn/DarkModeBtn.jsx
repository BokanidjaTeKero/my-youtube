import React from 'react';
import './DarkModeBtn.scss';

import {Btn} from '../Btn/Btn';

const DarkModeBtn = () => {
    return (
        <div className="darkModeBtn">
            <Btn iconType="WiMoonAltWaxingCrescent4" />
        </div>
    )
}

export {DarkModeBtn};