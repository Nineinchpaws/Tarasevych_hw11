import React, { useContext } from "react";
import { MyContext } from "../../context/MyContext";

const ContextHw = () => {
    const { theme, toggleTheme } = useContext(MyContext);

    const handleToggleTheme = () => {
        toggleTheme();
    };

    return (
        <div className={`App ${theme}`}>
            <button onClick={handleToggleTheme}>Change theme</button>
            <h1>Theme: {theme}</h1>
        </div>
    );
};

export default ContextHw;
