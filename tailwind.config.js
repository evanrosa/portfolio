/** @type {import('tailwindcss').Config} */
module.exports = {
darkMode: 'class',
content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}','node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
theme: {
    extend: {
      fontFamily: {
        code: ['Source Code Pro'],
      },
      colors: {
        red: {
          50: '#fbf2f4',
          100: '#f7e6e8',
          200: '#ecbfc6',
          300: '#e199a4',
          400: '#ca4d5f',
          500: '#b3001b',
          600: '#a10018',
          700: '#860014',
          800: '#6b0010',
          900: '#58000d'
        },
        grey: {
          50: '#f9fafb',
          100: '#f3f4f7',
          200: '#e1e4eb',
          300: '#cfd3df',
          400: '#acb3c8',
          500: '#8892b0',
          600: '#7a839e',
          700: '#666e84',
          800: '#52586a',
          900: '#434856'
        },
        blue: {
          50: '#f3f4f5',
          100: '#e7e8ea',
          200: '#c2c6cb',
          300: '#9da3ac',
          400: '#545e6d',
          500: '#0a192f',
          600: '#09172a',
          700: '#081323',
          800: '#060f1c',
          900: '#050c17'
        },
        sky: {
          50: '#fefeff',
          100: '#fdfeff',
          200: '#fafcfe',
          300: '#f7fafd',
          400: '#f1f6fc',
          500: '#ebf2fa',
          600: '#d4dae1',
          700: '#b0b6bc',
          800: '#8d9196',
          900: '#73777b'
        },
        yellow: {
          50: '#fffdf5',
          100: '#fffbec',
          200: '#fff4cf',
          300: '#ffedb2',
          400: '#ffe079',
          500: '#ffd23f',
          600: '#e6bd39',
          700: '#bf9e2f',
          800: '#997e26',
          900: '#7d671f'
        }
      }
    }
  },
  plugins: [
        require('flowbite/plugin')
    ],
};
