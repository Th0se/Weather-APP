/** @format */

import type { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
const Header: FunctionComponent = () => {
    return (
        <header>
            <div>
                <p>Weather prediction</p>
            </div>
            <div>
                <Link to='/current_weather'>Current Weather</Link>
                <Link to='/'>Key</Link>
            </div>
        </header>
    );
};

export default Header;
