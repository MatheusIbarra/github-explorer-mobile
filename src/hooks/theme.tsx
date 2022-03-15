import React, { createContext, useCallback, useContext, useState } from 'react';
import {
    ThemeProvider as Provider,
    DefaultTheme,
} from 'styled-components/native';
import defaultTheme from '../styles/themes/default';
import usePersistedState from '../utils/usePersistedState';

interface ThemeContextData {
    theme: any;
}

const themeContext = createContext<ThemeContextData>({} as ThemeContextData);

const ThemeProvider: React.FC = ({ children }) => {
    //Seta tema no storage, para futuras alterações e trocas de temas, como usuário selecionar tema noturno.
    const [theme, setTheme] = usePersistedState<DefaultTheme>(
        'theme',
        defaultTheme,
    );

    return (
        <themeContext.Provider value={{ theme }}>
            <Provider theme={theme}>{children}</Provider>
        </themeContext.Provider>
    );
};

function useTheme(): ThemeContextData {
    const context = useContext(themeContext);

    if (!context) {
        throw new Error('useTheme must be used within an ThemeProvider');
    }

    return context;
}

export { ThemeProvider, useTheme };
