import React from 'react';
import { Link } from 'react-router-dom';
import './styles/index.scss'

import { className } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';

const App = () => {

    const { theme, toggeleTheme } = useTheme()

    return (
        <div className={className('app', {}, [theme])}>
            <button onClick={toggeleTheme}>TOGGLE</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <AppRouter />

        </div>
    );
};

export default App;