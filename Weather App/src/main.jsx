/** @format */

import { StrictMode, Suspense, lazy } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';

const Key = lazy(() => import('./pages/Key'));
const Weather = lazy(() => import('./pages/Weather'));
const SunAndMoon = lazy(() => import('./pages/SunAndMoon'));
const Air = lazy(() => import('./pages/Air'));

const router = createBrowserRouter([
    { path: '/key', element: <Key /> },
    { path: '/weather', element: <Weather /> },
    { path: '/sun_and_moon', element: <SunAndMoon /> },
    { path: '/air', element: <Air /> },
]);

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Suspense fallback={<div>Loading...</div>}>
            <RouterProvider router={router} />
        </Suspense>
    </StrictMode>
);
