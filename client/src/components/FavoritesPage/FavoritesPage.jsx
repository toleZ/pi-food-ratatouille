import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import RecipeCard from "../RecipeCard/RecipeCard";
import { recipesContainer, favRecsError } from "./FavoritesPage.module.css";

const FavoritesPage = () => {
  const { favsRecipes, recipes } = useSelector((state) => state.recipesReducer);
  const [toShow, setToShow] = useState([]);

  useEffect(() => {
    favsRecipes.length &&
      setToShow(recipes.filter(({ id }) => favsRecipes.includes(id)));
    //eslint-disable-next-line
  }, [favsRecipes]);

  if (!favsRecipes.length)
    return (
      <div className={favRecsError}>
        <h1>You do not have any recipes added to favorites</h1>
        <p>
          You can <Link to={"/recipes/page/1"}>click here</Link> to go to the
          recipes page and start adding them to your favorites list
        </p>
      </div>
    );

  return (
    <main>
      <div className={recipesContainer}>
        {toShow.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </main>
  );
};

export default FavoritesPage;
