import axios from "axios";

export const FETCH_RECIPES = "FETCH_RECIPES";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_BY_API = "GET_RECIPES_BY_API";
export const GET_RECIPES_BY_DT = "GET_RECIPES_BY_DT";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const GET_RECIPE_BY_ID = "GET_RECIPES_BY_ID";
export const CREATE_RECIPE = "CREATE_RECIPE";
export const FILTER_RECIPES_BY_DIETS = "FILTER_RECIPES_BY_DIETS";
export const SORT_RECIPES_BY_NAME = "SORT_RECIPES_BY_NAME";
export const SORT_RECIPES_BY_HEALTH_SCORE = "SORT_RECIPES_BY_HEALTH_SCORE";
export const HANDLE_FAVORITES_RECIPES = "HANDLE_FAVORITES_RECIPES";

export const fetchRecipes = () => {
  return async (dispatch) => {
    const res = await axios.get("/recipes");
    console.log(res);

    const recipes = await res.data;

    dispatch({ type: FETCH_RECIPES, payload: recipes });
  };
};

export const getRecipes = () => {
  return { type: GET_RECIPES };
};

export const getRecipesByApi = () => {
  return async (dispatch) => {
    const res = await axios.get("?from=api");
    const recipes = await res.data;

    dispatch({ type: GET_RECIPES_BY_API, payload: recipes });
  };
};

export const getRecipesByDt = () => {
  return async (dispatch) => {
    const res = await axios.get("?from=dt");
    const recipes = await res.data;

    dispatch({ type: GET_RECIPES_BY_DT, payload: recipes });
  };
};

export const getRecipeByName = (name) => {
  return async (dispatch) => {
    const res = await axios.get(`?name=${name}`);
    const recipes = await res.data;

    dispatch({ type: GET_RECIPES_BY_NAME, payload: recipes[0] });
  };
};

export const getRecipeById = (id) => {
  return async (dispatch) => {
    const res = await axios.get(`/${id}`);
    const recipe = await res.data;

    dispatch({ type: GET_RECIPE_BY_ID, payload: recipe });
  };
};

export const createRecipe = (recipe) => {
  return async (dispatch) => {
    const res = await axios.post("", recipe);

    dispatch({ type: CREATE_RECIPE, payload: res.data });
  };
};

export const filterRecipesByDiets = (diets) => {
  const payload = Object.entries(diets)
    .filter((entrie) => entrie[1] === true)
    .map((entrie) => entrie[0]);

  return { type: FILTER_RECIPES_BY_DIETS, payload };
};

export const sortRecipesByName = (mode = "asc") => {
  if (mode !== "asc" && mode !== "dsc")
    throw Error(
      `Mode: ${mode} isn't available value, can try with "asc" or "dsc"`
    );

  return { type: SORT_RECIPES_BY_NAME, payload: mode };
};

export const sortRecipesByHealthScore = (mode = "asc") => {
  return { type: SORT_RECIPES_BY_HEALTH_SCORE, payload: mode };
};

export const handleFavoritesRecipes = (id) => {
  return { type: HANDLE_FAVORITES_RECIPES, payload: id };
};
