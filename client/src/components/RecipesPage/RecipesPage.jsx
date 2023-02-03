import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import RecipesContainer from "../RecipesContainer/RecipesContainer";

const RecipesPage = () => {
  const { recipesPage } = useParams();
  const { recipes, filteredRecipes } = useSelector(
    (state) => state.recipesReducer
  );

  return (
    <main style={{ marginTop: "92px" }}>
      <RecipesContainer
        since={(Number(recipesPage) - 1) * 9}
        until={Number(recipesPage) * 9}
        showFilters={true}
      />
      <Pagination
        url={"/recipes/page"}
        cur={Number(recipesPage)}
        length={Math.ceil((filteredRecipes.length || recipes.length) / 9)}
      />
    </main>
  );
};

export default RecipesPage;
