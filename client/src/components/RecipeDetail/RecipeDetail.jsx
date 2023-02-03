import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getRecipeById } from "../../redux/actions/recipesActions";
import Spinner from "../Spinner/Spinner";
import HeartRegular from "../../assets/HeartRegular";
import HeartSolid from "../../assets/HeartSolid";
import {
  recipeDetail,
  recipeTitle,
  recipeHearths,
  recipeSummary,
  recipeImage,
  recipeInfo,
  infoList,
  infoItem,
  recipeSteps,
  stepsList,
  stepsItem,
} from "./RecipeDetail.module.css";

const RecipeDetail = () => {
  const dispatch = useDispatch();
  const { recipeId } = useParams();
  const { recipe } = useSelector((state) => state.recipesReducer);

  //eslint-disable-next-line
  useEffect(() => dispatch(getRecipeById(recipeId)), [recipeId]);

  const calcHearths = () => {
    const res = [];
    const a = Math.floor(recipe.healthScore / 20);

    for (let i = 0; i < 5; i++) {
      res.push(i < a);
    }

    return res;
  };

  //eslint-disable-next-line
  if (recipe.id != recipeId) return <Spinner align={"center"} size="10em" />;

  return (
    <article className={recipeDetail}>
      <header>
        <h1 className={recipeTitle}>{recipe.title}</h1>

        <div className={recipeHearths}>
          {calcHearths().map((cond) =>
            cond ? (
              <HeartSolid fill={"#ff0000"} key={Math.random()} />
            ) : (
              <HeartRegular fill={"#ff0000"} key={Math.random()} />
            )
          )}
          ({recipe.healthScore})
        </div>

        <p
          className={recipeSummary}
          dangerouslySetInnerHTML={{ __html: recipe.summary }}
        />
      </header>

      <img src={recipe.image} alt={recipe.title} className={recipeImage} />

      <main>
        <div className={recipeInfo}>
          <ul className={infoList}>
            <li className={infoItem}>
              <h4>Prep time:</h4>
              <span>{recipe.readyInMinutes} mins</span>
            </li>
            <li className={infoItem}>
              <h4>Servings:</h4>
              <span>{recipe.servings}</span>
            </li>
            <li className={infoItem}>
              <h4>Price per serving:</h4>
              <span>$ {recipe.pricePerServing}</span>
            </li>
          </ul>
        </div>

        <div className={recipeSteps}>
          <h3>Steps:</h3>
          <ol className={stepsList}>
            {recipe?.instructions?.map((step, index) => (
              <li key={index} className={stepsItem}>
                {step}
              </li>
            ))}

            {recipe?.analyzedInstructions &&
              recipe?.analyzedInstructions[0]?.steps?.map(({ step }, index) => (
                <li key={index} className={stepsItem}>
                  {step}
                </li>
              ))}
          </ol>
        </div>
      </main>
    </article>
  );
};

export default RecipeDetail;
