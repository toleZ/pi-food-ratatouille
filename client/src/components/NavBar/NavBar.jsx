import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { navBar, navList, navItem } from "./NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={navBar}>
      <img src="./gusteau-logo.png" alt="gusteaus-logo" width="92px" />

      <ul className={navList}>
        <NavLink to="/" className={navItem}>
          Home
        </NavLink>
        <NavLink to="/recipes" className={navItem}>
          Recipes
        </NavLink>
        <NavLink to="/diets" className={navItem}>
          Diets
        </NavLink>
        <NavLink to="/about" className={navItem}>
          About
        </NavLink>
      </ul>

      <SearchBar />
    </nav>
  );
};

export default NavBar;
