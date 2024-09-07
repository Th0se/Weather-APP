/** @format */

import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../shared/Header';

const ForecastDay = ({ forecastsky, date }) => {
    return (
        <div>
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
        <div data-theme='pastel'>
            <Header />
            <main>
                <div>
                    <form>
                        <label>
                            <span>Enter your location</span>
                            <input
                                type='text'
                                value={location}
                                onChange={(e) => setLocation(e.target.value)}
                                id='location'
                            />
                        </label>
                        <button onClick={(e) => handleSubmit(e)}>Submit</button>
                    </form>
                </div>
                <div>
                    {response ? (
                        <>
                            <div>
                                <p>
                                    <span>Name: </span>
                                    {response.location.name}
                                </p>
                                <p>
                                    <span>Region: </span>
                                    {response.location.region}
                                </p>
                                <p>
                                    <span>Country: </span>
                                    {response.location.country}
                                </p>
                                <p>
                                    <span>Current Local Time: </span>
                                    {response.location.localtime}
                                </p>
                            </div>
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
        </div>
    );
};

ForecastDay.propTypes = {
    forecastsky: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
};

export default SunAndMoon;
