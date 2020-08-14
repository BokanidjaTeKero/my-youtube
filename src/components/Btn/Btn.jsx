import React from 'react';
import './Btn.scss';

import { FaUserCircle } from 'react-icons/fa'; // user
import { WiMoonAltWaxingCrescent4 } from 'react-icons/wi'; // dark-light
import { IoIosArrowBack } from 'react-icons/io'; // back
import { GoCheck } from 'react-icons/go'; // roger that
import { IoIosArrowUp } from 'react-icons/io'; // top


const Btn = ({iconType, clickBtn}) => {

    const formula = () => {

        if(iconType === 'FaUserCircle') {
            return <FaUserCircle></FaUserCircle>
        } else if(iconType === 'WiMoonAltWaxingCrescent4') {
            return <WiMoonAltWaxingCrescent4></WiMoonAltWaxingCrescent4>
        } else if(iconType === 'IoIosArrowBack') {
            return <IoIosArrowBack></IoIosArrowBack>
        } else if(iconType === 'GoCheck') {
            return <GoCheck></GoCheck>
        } else {
            return <IoIosArrowUp></IoIosArrowUp>
        }
    }

    return (
        <div className="btn" onClick={clickBtn}>
            {formula()}
        </div>
    )
}

export {Btn};