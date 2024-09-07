/** @format */

import { useState } from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../shared/Header';

const ForecastDay = ({ forecastday, date }) => {
    return (
        <div className='overflow-auto'>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Symbol</th>
                        <th>Max Temp (°C)</th>
                        <th>Min Temp (°C)</th>
                        <th>max Wind Velocity (km/h)</th>
                        <th>Total Precipitation (mm)</th>
                        <th>Total Snow (cm)</th>
                        <th>Mean Visibility (km)</th>
                        <th>Average Humidity</th>
                        <th>Rain chance</th>
                        <th>Snow chance</th>
                        <th>Condition</th>
                        <th>Wind Direction</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{date}</td>
                        <td>
                            {
                                <img
                                    src={forecastday.condition['icon']}
                                    alt={forecastday.condition.text}
                                />
                            }
                        </td>
                        <td>{forecastday.maxtemp_c}</td>
                        <td>{forecastday.mintemp_c}</td>
                        <td>{forecastday.maxwind_kph}</td>
                        <td>{forecastday.totalprecip_mm}</td>
                        <td>{forecastday.totalsnow_cm}</td>
                        <td>{forecastday.avgvis_km}</td>
                        <td>{forecastday.avghumidity}</td>
                        <td>{forecastday.daily_chance_of_rain}</td>
                        <td>{forecastday.daily_chance_of_snow}</td>
                        <td>{forecastday.condition.text}</td>
                        <td>{forecastday.wind_dir}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

const Weather = () => {
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
    forecastday: PropTypes.object.isRequired,
    forecastsky: PropTypes.object.isRequired,
    date: PropTypes.string.isRequired,
};

export default Weather;
