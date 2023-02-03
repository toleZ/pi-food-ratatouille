import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterRecipesByDiets } from "../../redux/actions/recipesActions";
import AsideFilters from "../AsideFilters/AsideFilters";
import RecipeCard from "../RecipeCard/RecipeCard";
import { recipesContainer } from "./RecipesContainer.module.css";

const RecipesContainer = ({ since = 0, until = 12, showFilters = false }) => {
  const dispatch = useDispatch();

  const [dietsToFilter, setDietsToFilter] = useState({
    Ketogenic: false,
    Vegetarian: false,
    Paleo: false,
    "Low FODMAP": false,
    "Ovo-Vegetarian": false,
    Vegan: false,
    Pescetarian: false,
    "Gluten Free": false,
    "Lacto-Vegetarian": false,
    Primal: false,
    Whole30: false,
  });

  useEffect(
    () => dispatch(filterRecipesByDiets(dietsToFilter)),
    //eslint-disable-next-line
    [dietsToFilter]
  );

  const { recipes, filteredRecipes } = useSelector(
    ({ recipesReducer }) => recipesReducer
  );

  const mapRecipes = (arr) => {
    return arr
      ?.slice(since, until)
      .map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />);
  };

  return (
    <section
      style={{
        display: "grid",
        gridTemplateColumns: `${showFilters ? "1fr 4fr" : "1fr"}`,
      }}
    >
      {showFilters && (
        <AsideFilters
          dietsToFilter={dietsToFilter}
          setDietsToFilter={setDietsToFilter}
        />
      )}
      <div className={recipesContainer}>
        {mapRecipes(!filteredRecipes.length ? recipes : filteredRecipes)}
      </div>
    </section>
  );
};

export default RecipesContainer;
