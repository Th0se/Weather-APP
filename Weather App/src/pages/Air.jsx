/** @format */

import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../shared/Header';

const ForecastDay = ({ forecastday, date }) => {
    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>UV</th>
                        <th>CO</th>
                        <th>NO2</th>
                        <th>O3</th>
                        <th>SO2</th>
                        <th>PM2.5</th>
                        <th>PM10</th>
                        <th>US EPA Index</th>
                        <th>GB Defra Index</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{date}</td>
                        <td>{forecastday.uv}</td>
                        <td>{forecastday.air_quality.co}</td>
                        <td>{forecastday.air_quality.no2}</td>
                        <td>{forecastday.air_quality.o3}</td>
                        <td>{forecastday.air_quality.so2}</td>
                        <td>{forecastday.air_quality.pm2_5}</td>
                        <td>{forecastday.air_quality.pm10}</td>
                        <td>{forecastday.air_quality['us-epa-index']}</td>
                        <td>{forecastday.air_quality['gb-defra-index']}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const Air = () => {
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
                                        forecastday={day.day}
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
    forecastday: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
};

export default Air;
