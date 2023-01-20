import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeByName } from "../../redux/actions/recipesActions";
import {
  searchBarContainer,
  searchInput,
  searchBtn,
} from "./SearchBar.module.css";
import MagnifyingGlass from "../../assets/MagnifyingGlass";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [toSearch, setToSearch] = useState("");

  //eslint-disable-next-line
  const { recipe } = useSelector((state) => state.recipesReducer);

  const handleChange = (e) => {
    setToSearch(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(getRecipeByName(toSearch));
  };

  return (
    <div className={searchBarContainer}>
      <input
        type="text"
        placeholder="Find recipe"
        value={toSearch}
        onChange={handleChange}
        className={searchInput}
      />
      <button onClick={handleSubmit} className={searchBtn}>
        <MagnifyingGlass fill={"#e3e2cf"} />
      </button>
    </div>
  );
};

export default SearchBar;
