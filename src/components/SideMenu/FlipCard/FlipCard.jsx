import React from 'react';         
import './FlipCard.scss';

import logo2 from '../../../assets/logo2.png';

const FlipCard = ({textDisclaimer}) => {
    return (
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className="logo2" src={logo2} alt="logo2" />
                </div>
                <div className="flip-card-back">
                    <p>
                        {textDisclaimer}
                    </p>
                </div>
            </div>
        </div>
    )
}

export {FlipCard};