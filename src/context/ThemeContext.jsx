import {  createContext, useState } from "react";
/** -------------------- Theme Context ---------------------------- */
const ThemeContext = createContext();

/** -------------------- Initial Variables ---------------------------- */
const initialTheme = "light";
/** -------------------- Theme Provider ---------------------------- */
const ThemeProvider = ({children}) => {

    const [theme, setTheme] = useState(initialTheme);
    
    const handleTheme = (e) => {
        if (e.target.value === "light") {
            setTheme("light");
        } else {
            setTheme("dark");
        }
    };
    
    const data = {theme, handleTheme};
    return (
        <ThemeContext.Provider value={data}> 
            {children}
        </ThemeContext.Provider>
    );
}

/** -------------------- Exports ---------------------------- */
export {ThemeProvider};
export default ThemeContext;