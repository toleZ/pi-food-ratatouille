import {
  CREATE_RECIPE,
  FETCH_RECIPES,
  FILTER_RECIPES_BY_DIETS,
  GET_RECIPES,
  GET_RECIPES_BY_API,
  GET_RECIPES_BY_DT,
  GET_RECIPES_BY_NAME,
  GET_RECIPE_BY_ID,
  SORT_RECIPES_BY_NAME,
  SORT_RECIPES_BY_HEALTH_SCORE,
  HANDLE_FAVORITES_RECIPES,
} from "../actions/recipesActions";

const initialState = {
  recipes: [],
  recipe: {},
  filteredRecipes: [],
  favsRecipes: [],
};

export const recipesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_RECIPES:
      return { ...state, recipes: payload };
    case GET_RECIPES:
      return { ...state.recipes, recipes: payload };
    case GET_RECIPES_BY_API:
      return { ...state, recipe: payload };
    case GET_RECIPES_BY_DT:
      return { ...state, recipes: payload };
    case GET_RECIPES_BY_NAME:
      return { ...state, recipe: payload };
    case GET_RECIPE_BY_ID:
      return { ...state, recipe: payload };
    case CREATE_RECIPE:
      return { ...state, recipe: payload };
    case FILTER_RECIPES_BY_DIETS:
      const filteredRecipes = state.recipes.filter(({ diets, dietsAlloweds }) =>
        diets
          ? diets?.some((r) => payload.map((a) => a.toLowerCase()).includes(r))
          : dietsAlloweds?.some((r) =>
              payload.map((a) => a.toLowerCase()).includes(r)
            )
      );

      return { ...state, filteredRecipes };
    case SORT_RECIPES_BY_NAME:
      const sortedRecipesByName = (arr) =>
        arr.sort((a, b) => {
          if (a.title < b.title) {
            return payload === "asc" ? -1 : 1;
          }
          if (a.title > b.title) {
            return payload === "asc" ? 1 : -1;
          }
          return 0;
        });

      return {
        ...state,
        recipes: sortedRecipesByName(
          !state.filteredRecipes.length ? state.recipes : state.filteredRecipes
        ),
      };

    case SORT_RECIPES_BY_HEALTH_SCORE:
      const sortedRecipesByHealthScore = (arr) =>
        arr.sort((a, b) => {
          if (a.healthScore > b.healthScore) {
            return payload !== "asc" ? -1 : 1;
          }
          if (a.healthScore < b.healthScore) {
            return payload !== "asc" ? 1 : -1;
          }
          return 0;
        });

      return {
        ...state,
        recipes: sortedRecipesByHealthScore(
          !state.filteredRecipes.length ? state.recipes : state.filteredRecipes
        ),
      };
    case HANDLE_FAVORITES_RECIPES:
      const isInFav = state.favsRecipes.includes(payload);

      if (!isInFav)
        return { ...state, favsRecipes: [...state.favsRecipes, payload] };

      const favsRecipesFiltered = state.favsRecipes.filter(
        (id) => id !== payload
      );
      return { ...state, favsRecipes: favsRecipesFiltered };
    default:
      return { ...state };
  }
};
