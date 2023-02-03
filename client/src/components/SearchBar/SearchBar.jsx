import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getRecipeByName } from "../../redux/actions/recipesActions";
import {
  searchBarContainer,
  searchInput,
  searchBtn,
} from "./SearchBar.module.css";
import MagnifyingGlass from "../../assets/MagnifyingGlass";
import { useEffect } from "react";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [toSearch, setToSearch] = useState("");

  const { recipe } = useSelector((state) => state.recipesReducer);
  useEffect(
    () => {
      if (toSearch) {
        if (recipe?.title.toLowerCase().includes(toSearch.toLowerCase())) {
          navigate(`/recipes/${recipe.id}`);
        }
      }
    },
    //eslint-disable-next-line
    [recipe]
  );

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
