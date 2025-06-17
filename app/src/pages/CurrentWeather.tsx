/** @format */
// Types
import type { FunctionComponent } from 'react';
import type {
    WeatherDataResponse,
    Current,
    Condition,
} from '../types/weather_response_types';
import { useState } from 'react';
// Components
import axios from 'axios';
import Header from '../shared/Header';
// Styles

const Input: FunctionComponent<{
    apiKey: string;
    setInformation: React.Dispatch<
        React.SetStateAction<WeatherDataResponse | null>
    >;
}> = ({ apiKey, setInformation }) => {
    const [address, setAddress] = useState('Semarang, Central Java, Indonesia');
    const handlePredict = async () => {
        const target = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${address}aqi=yes`;
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

// Dashboard for current weather data.
// Dense version.
const CurrentWeatherDense: FunctionComponent<{ data: Current }> = ({
    data,
}) => {
    const lastUpdate = data.last_updated;
    const condition: Condition = data.condition;
    const temp = data.temp_c;
    const wind = data.wind_kph;
    const pressure = data.pressure_mb;
    const precip = data.precip_mm;
    const humidity = data.humidity;
    const cloud = data.cloud;
    const feelslike = data.feelslike_c;
    const windchill = data.windchill_c;
    const heatindex = data.heatindex_c;
    const dewpoint = data.dewpoint_c;
    const vis = data.vis_km;
    const uv = data.uv;
    const gust = data.gust_kph;

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
                    <tr className='bg-base-200'>
                        <th>Last Updated</th>
                        <td>{lastUpdate}</td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Condition</th>
                        <td>{condition.text}</td>
                        <td></td>
                    </tr>
                    <tr className='bg-base-200'>
                        <th>Air Temperature</th>
                        <td>{temp}</td>
                        <td>&deg;C</td>
                    </tr>
                    <tr>
                        <th>Feels Like</th>
                        <td>{feelslike}</td>
                        <td>&deg;C</td>
                    </tr>
                    <tr className='bg-base-200'>
                        <th>Wind Speed</th>
                        <td>{wind}</td>
                        <td>km/h</td>
                    </tr>
                    <tr>
                        <th>Wind Gust</th>
                        <td>{gust}</td>
                        <td>km/h</td>
                    </tr>
                    <tr className='bg-base-200'>
                        <th>Wind Chill</th>
                        <td>{windchill}</td>
                        <td>&deg;C</td>
                    </tr>
                    <tr>
                        <th>Pressure</th>
                        <td>{pressure}</td>
                        <td>mb</td>
                    </tr>
                    <tr className='bg-base-200'>
                        <th>Precipitation</th>
                        <td>{precip}</td>
                        <td>mm</td>
                    </tr>
                    <tr>
                        <th>Humidity</th>
                        <td>{humidity}</td>
                        <td>%</td>
                    </tr>
                    <tr className='bg-base-200'>
                        <th>Cloud Cover</th>
                        <td>{cloud}</td>
                        <td>%</td>
                    </tr>
                    <tr>
                        <th>Heat Index</th>
                        <td>{heatindex}</td>
                        <td>&deg;C</td>
                    </tr>
                    <tr className='bg-base-200'>
                        <th>Dew Point</th>
                        <td>{dewpoint}</td>
                        <td>&deg;C</td>
                    </tr>
                    <tr>
                        <th>Visibility</th>
                        <td>{vis}</td>
                        <td>Km</td>
                    </tr>
                    <tr className='bg-base-200'>
                        <th>UV Index</th>
                        <td>{uv}</td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

/*
Dashboard for current weather data.
Grouped version.
This version serves the same information as the dense version, but this version breaks apart the information
inro multiple divs to make it less overwhelming to read.
*/
const CurrentWeatherGrouped: FunctionComponent<{ data: Current }> = ({
    data,
}) => {
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
    const current = data.current;
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
                    <CurrentWeatherDense data={current} />
                ) : (
                    <CurrentWeatherGrouped data={current} />
                )}
            </div>
        </div>
    );
};

const CurrentWeather: FunctionComponent = () => {
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

export default CurrentWeather;
