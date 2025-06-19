/** @format */

export interface WeatherDataResponse {
    location: Location;
    current: Current;
    forecast: Forecast;
    alerts: Alerts;
}

export interface Alerts {
    alert: any[];
}

export interface Current {
    last_updated: string;
    temp_c: number;
    is_day: number;
    condition: Condition;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    precip_mm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    windchill_c: number;
    heatindex_c: number;
    dewpoint_c: number;
    vis_km: number;
    uv: number;
    gust_kph: number;
    air_quality: { [key: string]: number };
}

export interface Condition {
    text: string;
    icon: string;
    code: number;
}

export interface Forecast {
    forecastday: Forecastday[];
}

export interface Forecastday {
    date: string;
    day: Day;
    astro: Astro;
    hour: Hour[];
}

export interface Astro {
    sunrise: string;
    sunset: string;
    moonrise: string;
    moonset: string;
    moon_phase: string;
    moon_illumination: number;
    is_moon_up: number;
    is_sun_up: number;
}

export interface Day {
    maxtemp_c: number;
    mintemp_c: number;
    avgtemp_c: number;
    maxwind_kph: number;
    totalprecip_mm: number;
    totalsnow_cm: number;
    avgvis_km: number;
    avghumidity: number;
    daily_will_it_rain: number;
    daily_chance_of_rain: number;
    daily_will_it_snow: number;
    daily_chance_of_snow: number;
    condition: Condition;
    uv: number;
}

export interface Hour {
    time_epoch: number;
    time: string;
    temp_c: number;
    is_day: number;
    condition: Condition;
    wind_kph: number;
    wind_degree: number;
    wind_dir: string;
    pressure_mb: number;
    precip_mm: number;
    snow_cm: number;
    humidity: number;
    cloud: number;
    feelslike_c: number;
    windchill_c: number;
    heatindex_c: number;
    dewpoint_c: number;
    will_it_rain: number;
    chance_of_rain: number;
    will_it_snow: number;
    chance_of_snow: number;
    vis_km: number;
    gust_kph: number;
    uv: number;
}

export interface Location {
    name: string;
    region: string;
    country: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
}
