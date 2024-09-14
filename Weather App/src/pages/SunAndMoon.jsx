/** @format */

import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../shared/Header';
import Footer from '../shared/Footer';

const ForecastDay = ({ forecastsky, date }) => {
    return (
        <div className='overflow-auto'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Sunrise</th>
                        <th>Sunset</th>
                        <th>Moonrise</th>
                        <th>Moonset</th>
                        <th>Moon Phase</th>
                        <th>Moon illumination</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{date}</td>
                        <td>{forecastsky.sunrise}</td>
                        <td>{forecastsky.sunset}</td>
                        <td>{forecastsky.moonrise}</td>
                        <td>{forecastsky.moonset}</td>
                        <td>{forecastsky.moon_phase}</td>
                        <td>{forecastsky.moon_illumination}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const SunAndMoon = () => {
    const [location, setLocation] = useState('');
    const [response, setResponse] = useState('');
    const key = localStorage.getItem('key');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const target = `http://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3&aqi=yes&alerts=yes`;
        const response = await axios.get(target);
        setResponse(response.data);
        console.log(response.data);
    };

    return (
        <div data-theme='night'>
            <Header />
            <main>
                <div className='grid grid-cols-1 grid-rows-2 md:grid-cols-3 lg:grid-cols-4 gap-2'>
                    <form className='lg:col-span-2 md:col-start-2 lg:col-start-2'>
                        <label className='grid grid-cols-1 gap-2 items-center form-control'>
                            <div className='label'>
                                <span className='label-text'>
                                    Enter your location
                                </span>
                                <span className='label-text-alt text-info'>
                                    City, province, country
                                </span>
                            </div>
                            <input
                                type='text'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                className='input input-bordered input-primary'
                            />
                        </label>
                    </form>
                    <button
                        onClick={(e) => handleSubmit(e)}
                        className='lg:col-span-2 md:col-start-2 lg:col-start-2 btn btn-primary'
                    >
                        Submit
                    </button>
                </div>
                <div>
                    {response ? (
                        <>
                            <table className='table'>
                                <tr>
                                    <th className='text-end'>Name</th>
                                    <td>{response.location.name}</td>
                                </tr>
                                <tr>
                                    <th className='text-end'>Region</th>
                                    <td>{response.location.region}</td>
                                </tr>
                                <tr>
                                    <th className='text-end'>Country</th>
                                    <td>{response.location.country}</td>
                                </tr>
                                <tr>
                                    <th className='text-end'>
                                        Current Local Time
                                    </th>
                                    <td>{response.location.localtime}</td>
                                </tr>
                            </table>
                            <div>
                                {response.forecast.forecastday.map((day) => (
                                    <ForecastDay
                                        key={day.date}
                                        forecastsky={day.astro}
                                        date={day.date}
                                    />
                                ))}
                            </div>
                        </>
                    ) : null}
                </div>
            </main>
            <Footer />
        </div>
    );
};

ForecastDay.propTypes = {
    forecastsky: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
};

export default SunAndMoon;
