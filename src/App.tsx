import React, { Suspense, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import './styles/index.scss'

import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { className } from './helpers/classNames/classNames';

const App = () => {

    const { theme, toggeleTheme } = useTheme()

    return (
        <div className={className('app', {}, [theme])}>
            <button onClick={toggeleTheme}>TOGGLE</button>

            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>

            <Suspense fallback={<div>Loading...</div>}> <Routes>
                <Route path={'/about'} element={<AboutPageAsync />} />
                <Route path={'/'} element={<MainPageAsync />} />
            </Routes>  </Suspense>

        </div>
    );
};

export default App;