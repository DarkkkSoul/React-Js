import { createContext, useContext } from "react";

// till here same as UserContext.js , can pass values here directly
export const ThemeContext = createContext({
    themeMode: 'light',
    darkTheme: () => { },
    lightTheme: () => { },
});

//next convert ThemeContext into provider

export const ThemeProvider = ThemeContext.Provider;

//now call context, useContext();
export default function useTheme() {
    return useContext(ThemeContext);
}
