/** @format */

import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const Key = lazy(() => import('./pages/Key'));
const WeatherAlert = lazy(() => import('./pages/CurrentWeather'));
const Forecast = lazy(() => import('./pages/Forecast'));

const router = createBrowserRouter([
    { path: '/key', element: <Key /> },
    { path: '/current_weather', element: <WeatherAlert /> },
    { path: '/weather_forecast', element: <Forecast /> },
]);

const rootElement = document.getElementById('root');
if (!rootElement) {
    console.error('Unable to locate root element.');
} else {
    createRoot(rootElement).render(
        <StrictMode>
            <Suspense fallback={<div>Loading...</div>}>
                <RouterProvider router={router} />
            </Suspense>
        </StrictMode>
    );
}
