import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  recipeLink,
  recipeContainer,
  recipeImage,
  recipeSummary,
  dietItem,
  dietsList,
  favIcon,
  hearts,
} from "./RecipeCard.module.css";
import HeartRegular from "../../assets/HeartRegular";
import HeartSolid from "../../assets/HeartSolid";
import { handleFavoritesRecipes } from "../../redux/actions/recipesActions";

const RecipeCard = ({ recipe }) => {
  const dispatch = useDispatch();
  const { id, title, summary, healthScore } = recipe;
  const { favsRecipes } = useSelector((state) => state.recipesReducer);

  const handleFav = () => {
    dispatch(handleFavoritesRecipes(id));
  };

  const calcHearths = () => {
    const res = [];
    const a = Math.floor(healthScore / 20);

    for (let i = 0; i < 5; i++) {
      res.push(i < a);
    }

    return res;
  };

  return (
    <div className={recipeContainer}>
      <button onClick={handleFav} className={favIcon}>
        {favsRecipes.includes(id) ? (
          <HeartSolid fill={"#ff0000"} />
        ) : (
          <HeartRegular fill={"#fff"} />
        )}
      </button>
      <img
        src={recipe.image || "https://picsum.photos/200"}
        alt={title}
        className={recipeImage}
      />

      <Link to={`/recipes/${id}`} className={recipeLink}>
        {title}
      </Link>
      <p className={recipeSummary}>
        {summary.replace(/<[^>]*>?/gm, "").slice(0, 120)}...
      </p>

      <p className={hearts}>
        {calcHearths().map((cond) =>
          cond ? (
            <HeartSolid fill={"#ff0000"} key={Math.random()} />
          ) : (
            <HeartRegular fill={"#ff0000"} key={Math.random()} />
          )
        )}
        ({healthScore})
      </p>

      <ul className={dietsList}>
        {recipe?.diets?.map((diet, index) => (
          <li className={dietItem} key={diet}>
            {diet} {recipe.diets[index + 1] && "|"}
          </li>
        ))}

        {recipe?.dietsAlloweds?.map((diet, index) => (
          <li className={dietItem} key={diet}>
            {diet} {recipe.dietsAlloweds[index + 1] && "|"}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeCard;
