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

const AirButton = () => {
    // Button to go the the 'Air' page.
    return (
        <NavLink
            to='/air'
            title='Go to "air" page.'
            className={({ isActive }) =>
                isActive
                    ? 'btn btn-secondary btn-active navbar-center'
                    : 'btn btn-secondary navbar-center'
            }
        >
            Air
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
            <div className='navbar grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
                <KeyButton />
                <WeatherButton />
                <AirButton />
                <SunAndMoonButton />
            </div>
        </header>
    );
};

export default Header;
