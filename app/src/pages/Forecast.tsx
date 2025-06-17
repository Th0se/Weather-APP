/** @format */

import type { FunctionComponent } from 'react';
import type {
    WeatherDataResponse,
    Condition,
    Forecast,
    Forecastday,
    Astro,
    Day,
    Hour,
} from '../types/weather_response_types';
import { useState } from 'react';
import axios from 'axios';
import Header from '../shared/Header';

const Input: FunctionComponent<{
    apiKey: string;
    setInformation: React.Dispatch<
        React.SetStateAction<WeatherDataResponse | null>
    >;
}> = ({ apiKey, setInformation }) => {
    const [address, setAddress] = useState('Semarang, Central Java, Indonesia');
    const handlePredict = async () => {
        const target = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${address}&days=3&aqi=yes&alerts=yes`;
        const response = await axios.get(target);
        setInformation(response.data);
        console.log(response.data);
    };
    return (
        <div>
            <form>
                <fieldset className='fieldset'>
                    <legend className='fieldset-legend'>Location</legend>
                    <input
                        type='text'
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className='input input-primary w-full'
                    />
                </fieldset>
                <p className='label'>City/town, province, country</p>
            </form>
            <button
                onClick={handlePredict}
                className='btn lg:btn-lg w-full btn-primary dark:btn-outline'
            >
                Predict
            </button>
        </div>
    );
};

// Hourly table for weather forecast.
// Dense Version
const ForecastHourDense: FunctionComponent<{ data: Hour }> = ({ data }) => {
    const time = data.time;
    const temperature = data.temp_c;
    const condition: Condition = data.condition;
    const wind = data.wind_kph;
    const windDir = data.wind_dir;
    const windDeg = data.wind_degree;
    const pressure = data.pressure_mb;
    const precip = data.precip_mm;
    const snow = data.snow_cm;
    const humidity = data.humidity;
    const cloud = data.cloud;
    const feelslike = data.feelslike_c;
    const windchill = data.windchill_c;
    const heatindex = data.heatindex_c;
    const dewpoint = data.dewpoint_c;
    const is_day = data.is_day;
    const visualRange = data.vis_km;
    const chanceOfRain = data.chance_of_rain;
    const chanceOfSnow = data.chance_of_snow;
    const gust = data.gust_kph;
    const uv = data.uv;

    return (
        <div>
            <table className='table border-solid border-2 border-accent'>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Value</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Time</th>
                        <td>{time}</td>
                    </tr>
                    <tr>
                        <th>Condition</th>
                        <td>{condition.text}</td>
                    </tr>
                    <tr>
                        <th>Temperature</th>
                        <td>{temperature}</td>
                        <td>%degC</td>
                    </tr>
                    <tr>
                        <th>Feels Like</th>
                        <td>{feelslike}</td>
                        <td>%degC</td>
                    </tr>
                    <tr>
                        <th>Wind Velocity</th>
                        <td>{wind}</td>
                        <td>km/h</td>
                    </tr>
                    <tr>
                        <th>Wind Direction Simple</th>
                        <td>{windDir}</td>
                    </tr>
                    <tr>
                        <th>Wind Precise</th>
                        <td>{windDeg}</td>
                        <td>%deg</td>
                    </tr>
                    <tr>
                        <th>Wind Chill</th>
                        <td>{windchill}</td>
                        <td>%degC</td>
                    </tr>
                    <tr>
                        <th>Gust</th>
                        <td>{gust}</td>
                        <td>km/h</td>
                    </tr>
                    <tr>
                        <th>Pressure</th>
                        <td>{pressure}</td>
                        <td>mb</td>
                    </tr>
                    <tr>
                        <th>Precipitation</th>
                        <td>{precip}</td>
                        <td>mm</td>
                    </tr>
                    <tr>
                        <th>Snow</th>
                        <td>{snow}</td>
                        <td>cm</td>
                    </tr>
                    <tr>
                        <th>Humidity</th>
                        <td>{humidity}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <th>Cloud</th>
                        <td>{cloud}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <th>Heat Index</th>
                        <td>{heatindex}</td>
                        <td>%degC</td>
                    </tr>
                    <tr>
                        <th>Dew Point</th>
                        <td>{dewpoint}</td>
                        <td>%degC</td>
                    </tr>
                    <tr>
                        <th>Day?</th>
                        <td>{is_day}</td>
                    </tr>
                    <tr>
                        <th>Visual Range</th>
                        <td>{visualRange}</td>
                        <td>km</td>
                    </tr>
                    <tr>
                        <th>Chance of Rain</th>
                        <td>{chanceOfRain}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <th>Change of Snow</th>
                        <td>{chanceOfSnow}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <th>Ulvtra Violet</th>
                        <td>{uv}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

// Daily table for weather forecast.
// Dense version.
const ForecastDayDense: FunctionComponent<{ data: Forecastday }> = ({
    data,
}) => {
    const astro: Astro = data.astro;
    const day: Day = data.day;
    const hours: Hour[] = data.hour;

    return (
        <div className='p-2'>
            <table className='table border-solid border-2 border-accent'>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Value</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Sunrise</th>
                        <td>{astro.sunrise}</td>
                    </tr>
                    <tr>
                        <th>Sunset</th>
                        <td>{astro.sunset}</td>
                    </tr>
                    <tr>
                        <th>Moonrise</th>
                        <td>{astro.moonrise}</td>
                    </tr>
                    <tr>
                        <th>Moonset</th>
                        <td>{astro.moonset}</td>
                    </tr>
                    <tr>
                        <th>Moon Phase</th>
                        <td>{astro.moon_phase}</td>
                    </tr>
                    <tr>
                        <th>Moon Illumination</th>
                        <td>{astro.moon_illumination}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <th>Sun</th>
                        <td>{astro.is_sun_up}</td>
                    </tr>
                    <tr>
                        <th>Moon</th>
                        <td>{astro.is_moon_up}</td>
                    </tr>
                </tbody>
            </table>
            <table className='table border-solid border-2 border-accent'>
                <thead>
                    <tr>
                        <th>Label</th>
                        <th>Value</th>
                        <th>Unit</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>Condition</th>
                        <td>{day.condition.text}</td>
                    </tr>
                    <tr>
                        <th>Maximum Temperature</th>
                        <td>{day.maxtemp_c}</td>
                        <td>&deg;C</td>
                    </tr>
                    <tr>
                        <th>Minimum Temperature</th>
                        <td>{day.mintemp_c}</td>
                        <td>&deg;C</td>
                    </tr>
                    <tr>
                        <th>Average Temperature</th>
                        <td>{day.avgtemp_c}</td>
                        <td>&deg;C</td>
                    </tr>
                    <tr>
                        <th>Maximum Wind Speed</th>
                        <td>{day.maxwind_kph}</td>
                        <td>km/h</td>
                    </tr>
                    <tr>
                        <th>Precipication</th>
                        <td>{day.totalprecip_mm}</td>
                        <td>mm</td>
                    </tr>
                    <tr>
                        <th>Snow</th>
                        <td>{day.totalsnow_cm}</td>
                        <td>cm</td>
                    </tr>
                    <tr>
                        <th>Visual Range</th>
                        <td>{day.avgvis_km}</td>
                        <td>km</td>
                    </tr>
                    <tr>
                        <th>Average Humidity</th>
                        <td>{day.avghumidity}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <th>Chance of Rain</th>
                        <td>{day.daily_chance_of_rain}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <th>Chane of Snow</th>
                        <td>{day.daily_chance_of_snow}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <th>Ultra Violet</th>
                        <td>{day.uv}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                {hours.map((hour) => {
                    return (
                        <ForecastHourDense
                            data={hour}
                            key={hour.time}
                        />
                    );
                })}
            </div>
        </div>
    );
};

// Dashboard for weather forecast.
// Dense version.
const ForecastDense: FunctionComponent<{ data: Forecast }> = ({ data }) => {
    const firstDay: Forecastday = data.forecastday[0];
    const secondDay: Forecastday = data.forecastday[1];
    const thirdDay: Forecastday = data.forecastday[2];

    return (
        <div className='p-2'>
            <ForecastDayDense data={firstDay} />
            <ForecastDayDense data={secondDay} />
            <ForecastDayDense data={thirdDay} />
        </div>
    );
};

/*
Dashboard for weather forecast.
Grouped version.
This version serves the same information as the dense version, but this version breaks apart the information
inro multiple divs to make it less overwhelming to read.
*/
const ForecastGrouped: FunctionComponent<{ data: Forecast }> = ({ data }) => {
    const lastUpdate = data.last_updated;
    const condition: Condition = data.condition;
    const temp = data.temp_c;
    const wind = data.wind_kph;
    const pressure = data.pressure_mb;
    const humidity = data.humidity;
    const cloud = data.cloud;
    const vis = data.vis_km;
    const uv = data.uv;
    const gust = data.gust_kph;

    return (
        <div className='p-2'>
            <div className='lg:grid lg:grid-cols-3'>
                <div className='grid grid-rows-2 col-start-2 justify-center'>
                    <strong>{lastUpdate}</strong>
                    <div className='grid justify-center'>
                        <img
                            src={condition.icon}
                            alt={condition.text}
                        />
                    </div>
                </div>
            </div>

            <div className='lg:grid lg:grid-cols-3 gap-2'>
                <div>
                    <h1 className='text-center'>Breath</h1>
                    <table className='table border-solid border-2 border-accent'>
                        <thead>
                            <tr>
                                <th>Label</th>
                                <th>Value</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Air Temperature</th>
                                <td>{temp}</td>
                                <td>&deg;C</td>
                            </tr>
                            <tr>
                                <th>Wind Speed</th>
                                <td>{wind}</td>
                                <td>km/h</td>
                            </tr>
                            <tr>
                                <th>Wind Gust</th>
                                <td>{gust}</td>
                                <td>km/h</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className='text-center'>Weight</h1>
                    <table className='table border-solid border-2 border-accent'>
                        <thead>
                            <tr>
                                <th>Label</th>
                                <th>Value</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Pressure</th>
                                <td>{pressure}</td>
                                <td>mb</td>
                            </tr>
                            <tr>
                                <th>Humidity</th>
                                <td>{humidity}</td>
                                <td>%</td>
                            </tr>
                            <tr>
                                <th>Visibility</th>
                                <td>{vis}</td>
                                <td>Km</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <h1 className='text-center'>Above</h1>
                    <table className='table border-solid border-2 border-accent'>
                        <thead>
                            <tr>
                                <th>Label</th>
                                <th>Value</th>
                                <th>Unit</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>UV Index</th>
                                <td>{uv}</td>
                                <td></td>
                            </tr>
                            <tr>
                                <th>Cloud Cover</th>
                                <td>{cloud}</td>
                                <td>%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

const Information: FunctionComponent<{ data: WeatherDataResponse }> = ({
    data,
}) => {
    const forecast = data.forecast;
    const [dense, setDense] = useState(true);

    const toggleDense = () => {
        setDense(!dense);
    };

    return (
        <div className='pt-2'>
            <div>
                <button
                    onClick={() => toggleDense()}
                    className='btn btn-soft py-2'
                >
                    {dense ? 'Switch to spread view' : 'Switch to dense view'}
                </button>
            </div>
            <div>
                {dense ? (
                    <ForecastDense data={forecast} />
                ) : (
                    <ForecastGrouped data={forecast} />
                )}
            </div>
        </div>
    );
};

const Forecast: FunctionComponent = () => {
    const key = localStorage.getItem('key');
    const [information, setInformation] = useState<WeatherDataResponse | null>(
        null
    );
    if (key === null) {
        return (
            <div>
                <h1>Insert your API key first</h1>
            </div>
        );
    } else if (information === null) {
        return (
            <div>
                <Header />
                <main>
                    <Input
                        apiKey={key}
                        setInformation={setInformation}
                    />
                </main>
            </div>
        );
    } else {
        return (
            <div>
                <Header />
                <main>
                    <Input
                        apiKey={key}
                        setInformation={setInformation}
                    />
                    <Information data={information} />
                </main>
            </div>
        );
    }
};

export default Forecast;
