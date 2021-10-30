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

//dnd
import { HTML5Backend } from "react-dnd-html5-backend"; //use Isso se o intuito é usar somente no computador
import { DndProvider } from "react-dnd";
import { TouchBackend } from "react-dnd-touch-backend";
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
        <DndProvider
          backend={TouchBackend}
          options={{ enableTouchEvents: "true", enableMouseEvents: "true" }}
        >
          <Routes />
        </DndProvider>
      </ThemeContext.Provider>
    </ThemeProvider>
  );
}

export default App;
