import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode: 'Light',
    darkTheme: () => { },
    lightTheme: () => { },
});
// till here same as UserContext.js , can pass values here directly

//next convert ThemeContext into provider

export const ThemeProvider = ThemeContext.Provider();

//now call context, useContext();
export default function useTheme() {
    return useContext(ThemeContext);
}
