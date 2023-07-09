import "./Styles.css";
import { useTheme } from "../ThemeContext";     //this receives the useTheme from the ThemeContext pages. 

const Switch = () => {
  const { theme, toggleTheme} = useTheme();
  return (
    <label className="switch">
      <input
        type="checkbox"
        checked={theme === "light"}
        onChange={toggleTheme}                //set the toggle and the Theme since Theme is the global var
      />
      <span className="slider round" />
    </label>
  );
};

export default Switch;
