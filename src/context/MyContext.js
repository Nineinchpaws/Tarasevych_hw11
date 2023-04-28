import React, { useState, useContext } from "react";

export const MyContext = React.createContext({
    theme: "light",
    toggleTheme: () => {},
});

export const MyContextProvider = ({ children }) => {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    };

    const value = { theme, toggleTheme };

    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export const useMyContext = () => useContext(MyContext);
