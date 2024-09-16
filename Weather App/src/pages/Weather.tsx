/** @format */

import { useState } from 'react';
import axios from 'axios';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { WeatherDataResponse } from './interfaces/response';

type ForecastDayPropType = {
    date: string;
    forecastday: {
        maxtemp_c: number;
        mintemp_c: number;
        maxwind_kph: number;
        totalprecip_mm: number;
        totalsnow_cm: number;
        avgvis_km: number;
        avghumidity: number;
        daily_chance_of_snow: number;
        daily_chance_of_rain: number;
        condition: {
            text: string;
            icon: string;
        };
        wind_dir?: string;
    };
};

const ForecastDay: React.FunctionComponent<ForecastDayPropType> = ({
    forecastday,
    date,
}) => {
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

const Weather: React.FunctionComponent = () => {
    const [location, setLocation] = useState<string>('');
    const [response, setResponse] = useState<WeatherDataResponse | ''>('');
    const key = localStorage.getItem('key');

    const handleSubmit = async (event: React.MouseEvent | React.TouchEvent) => {
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
                        <label className='grid grid-cols-1 gap-2 items-center from-control'>
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
                                        forecastday={day.day}
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

export default Weather;
