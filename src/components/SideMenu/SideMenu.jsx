import React, {Component} from 'react';
import './SideMenu.scss';

import {LogInMenu} from './LogInMenu/LogInMenu';

class SideMenu extends Component {

    render() {
        return (
            <div className="sideMenu">
                <LogInMenu />
            </div>
        )
    }
}

export {SideMenu};