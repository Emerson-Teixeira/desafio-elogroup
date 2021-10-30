import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//routes

import Routes from "./routes/Routes";

//Styled-Components
import { GlobalStyle } from "./assets/GlobalStyle/GlobalStyle";
import { ThemeProvider } from "styled-components";
import { theme1, theme2 } from "./assets/theme/themes.js";
import { ThemeContext } from "./Contexts/themeContext";
const objTheme = {
  dark: theme1,
  light: theme2,
};

function App() {
  const [theme, setTheme] = useState("dark");
  return (
    <ThemeProvider theme={objTheme[theme]}>
      <GlobalStyle />
      <ToastContainer limit={2} />
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Routes />
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
