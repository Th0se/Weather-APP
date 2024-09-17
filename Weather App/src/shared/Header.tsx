/** @format */

import { NavLink } from 'react-router-dom';

const KeyButton = () => {
    // Button to go the the 'Key' page.
    return (
        <NavLink
            to='/key'
            title='Go to "key" page.'
            className={({ isActive }) =>
                isActive
                    ? 'btn btn-secondary btn-active navbar-center'
                    : 'btn btn-secondary navbar-center'
            }
        >
            Key
        </NavLink>
    );
};

const WeatherButton = () => {
    // Button to go the the 'Weather' page.
    return (
        <NavLink
            to='/weather'
            title='Go to "weather" page.'
            className={({ isActive }) =>
                isActive
                    ? 'btn btn-secondary btn-active navbar-center'
                    : 'btn btn-secondary navbar-center'
            }
        >
            Forecast
        </NavLink>
    );
};

const SunAndMoonButton = () => {
    // Button to go the the 'SunAndMoon' page.
    return (
        <NavLink
            to='/sun_and_moon'
            title='Go to "Sun and moon" page.'
            className={({ isActive }) =>
                isActive
                    ? 'btn btn-secondary btn-active navbar-center'
                    : 'btn btn-secondary navbar-center'
            }
        >
            Sun & Moon
        </NavLink>
    );
};

const Header = () => {
    return (
        <header className='bg-neutral'>
            <div className='prose max-w-none'>
                <h1 className='text-center p-4'>Hawa</h1>
            </div>
            <div className='navbar grid md:grid-cols-3 gap-4'>
                <KeyButton />
                <WeatherButton />
                <SunAndMoonButton />
            </div>
        </header>
    );
};

export default Header;
