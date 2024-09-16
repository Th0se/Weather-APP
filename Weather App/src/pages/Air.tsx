/** @format */

import { useState } from 'react';
import axios from 'axios';
import Header from '../shared/Header';
import Footer from '../shared/Footer';
import { WeatherDataResponse } from './interfaces/response';

type ForecastDayPropType = {
    date: string;
    forecastday: {
        uv: number;
        air_quality: {
            co: number;
            no2: number;
            o3: number;
            so2: number;
            pm2_5: number;
            pm10: number;
            'us-epa-index': number;
            'gb-defra-index': number;
        };
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

const Air: React.FunctionComponent = () => {
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

export default Air;
