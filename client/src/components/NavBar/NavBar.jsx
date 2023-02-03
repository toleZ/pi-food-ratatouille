import { NavLink } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";
import { navBar, navList, navItem } from "./NavBar.module.css";
import Logo from "../../assets/images/gusteau-logo.png";

const NavBar = () => {
  return (
    <nav className={navBar}>
      <img src={Logo} alt="gusteaus-logo" width="92px" />
      <ul className={navList}>
        <NavLink to="/home" className={navItem}>
          Home
        </NavLink>
        <NavLink to="/recipes/page/1" className={navItem}>
          Recipes
        </NavLink>
        <NavLink to="/recipes/favorites" className={navItem}>
          Favorites
        </NavLink>
        <NavLink to="/recipes/form" className={navItem}>
          Creator
        </NavLink>
      </ul>

      <SearchBar />
    </nav>
  );
};

export default NavBar;
