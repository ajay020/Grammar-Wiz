import React, { createContext, useContext, useEffect, useState } from 'react';
import { Appearance } from 'react-native';
import cache from '../utility/cache';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const systemTheme = Appearance.getColorScheme();

    const [theme, setTheme] = useState('light');

    const toggleTheme = async () => {
        setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
        cache.storeData("isDarkTheme", theme)
    };

    useEffect(function () {
        async function getCurrentTheme() {
            const isDarkTheme = await cache.getData("isDarkTheme")
            if (isDarkTheme) {
                setTheme("dark")
            } else {
                setTheme("light")
            }
        }

        getCurrentTheme()
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
