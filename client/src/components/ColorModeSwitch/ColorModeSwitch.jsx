import { useEffect, useState } from "react";
import Sun from "../../assets/Sun";
import Moon from "../../assets/Moon";
import { colorModeSwitchBtn } from "./ColorModeSwitch.module.css";

const ColorModeSwitch = () => {
  const [colorMode, setColorMode] = useState("dark");

  const handleSwitch = () =>
    setColorMode(colorMode === "dark" ? "light" : "dark");

  useEffect(() => {
    const root = document.getElementById("root");
    root.classList = colorMode;
  }, [colorMode]);

  return (
    <button onClick={handleSwitch} className={colorModeSwitchBtn}>
      {colorMode === "dark" ? <Sun /> : <Moon />}
    </button>
  );
};

export default ColorModeSwitch;
