import { createContext, useContext, useState } from "react";

//start by creating an undefined state in our case
const ThemeContext = createContext(undefined);

//this children is a props, so we have to wrap it to curly braces. 
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");     //set the current state to light mode
    //return the ThemeProvider with value and the toggleTheme function for the toggle page. 
    return <ThemeContext.Provider value={{
        theme,
        toggleTheme: () => setTheme(theme === "light" ? "dark" : "light")
    }}>
        {children}
    </ThemeContext.Provider>
};

//export the themeContext to let other components knows it. 
export const useTheme = () => useContext(ThemeContext);
