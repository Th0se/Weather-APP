/**
 * @format
 * @type {import('tailwindcss').Config}
 */

import daisyUI from 'daisyui';
import tailwindTypography from '@tailwindcss/typography';

export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {},
    },
    daisyui: {
        themes: ['pastel', 'luxury', 'night'],
    },
    plugins: [daisyUI, tailwindTypography],
};
