import { useContext } from "react";
import { BsMoon, BsSun } from "react-icons/bs";
import { ThemeContext } from "../../../../Contexts/themeContext";
import { ThemeChanger } from "./styles";

export default function ThemeSwitch() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <ThemeChanger
      onClick={(e) => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? (
        <>
          <span>Dark Mode </span>
          <BsMoon />
        </>
      ) : (
        <>
          <span>Light Mode</span>
          <BsSun />
        </>
      )}
    </ThemeChanger>
  );
}
