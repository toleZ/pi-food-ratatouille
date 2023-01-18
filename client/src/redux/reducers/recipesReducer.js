import {
  CREATE_RECIPE,
  FETCH_RECIPES,
  GET_RECIPES,
  GET_RECIPES_BY_API,
  GET_RECIPES_BY_DT,
  GET_RECIPES_BY_NAME,
  GET_RECIPE_BY_ID,
} from "../actions/recipesActions";

const initialState = {
  recipes: [],
  apiRecipes: [],
  dtRecipes: [],
  recipe: {},
};

export const recipesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_RECIPES:
      return { ...state, recipes: payload };
    case GET_RECIPES:
      return { ...state.recipes, recipes: payload };
    case GET_RECIPES_BY_API:
      return { ...state, apiRecipes: payload };
    case GET_RECIPES_BY_DT:
      return { ...state, dtRecipes: payload };
    case GET_RECIPES_BY_NAME:
      return { ...state, recipe: payload };
    case GET_RECIPE_BY_ID:
      return { ...state, recipe: payload };
    case CREATE_RECIPE:
      return { ...state, recipe: payload };
    default:
      return { ...state };
  }
};
