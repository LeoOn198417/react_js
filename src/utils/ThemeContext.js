import React from "react";

export const ThemeContext = React.createContext({
    theme: "red",
    changeTheme: () => { },
});