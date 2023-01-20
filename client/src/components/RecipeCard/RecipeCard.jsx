import { Link } from "react-router-dom";
import {
  recipeLink,
  recipeContainer,
  recipeImage,
  recipeSummary,
  dietItem,
  dietsList,
} from "./RecipeCard.module.css";

const RecipeCard = ({ recipe }) => {
  const { id, title, summary, diets } = recipe;

  return (
    <div className={recipeContainer}>
      <img src={recipe.image} alt={title} className={recipeImage} />
      <Link to={`recipes/${id}`} className={recipeLink}>
        {title}
      </Link>
      <p className={recipeSummary}>{summary.slice(0, 120)}...</p>

      <ul className={dietsList}>
        {diets?.map((diet) => (
          <Link to={`diets/${diet}`} className={dietItem} key={diet}>
            {diet}
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;
