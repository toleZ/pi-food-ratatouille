import { useSelector } from "react-redux";
import RecipeCard from "../RecipeCard/RecipeCard";
import { recipesContainer } from "./RecipesContainer.module.css";

const RecipesContainer = ({ quantity = 1 }) => {
  const { recipes } = useSelector(({ recipesReducer }) => recipesReducer);

  return (
    <div className={recipesContainer}>
      {recipes?.slice(2, 2 + quantity).map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipesContainer;
