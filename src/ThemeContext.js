import { useState, createContext } from 'react';

export const ThemeContext = createContext();

function Theme({ children }) {
    const [theme, setTheme] = useState('Dark');

    const handleTheme = () => {
        setTheme(theme === 'Dark' ? 'Light' : 'Dark');
    }

    const value = {
        theme,
        handleTheme
    }

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    )
}

export default Theme;