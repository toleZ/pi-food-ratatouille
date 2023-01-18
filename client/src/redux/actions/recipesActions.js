export const FETCH_RECIPES = "FETCH_RECIPES";
export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPES_BY_API = "GET_RECIPES_BY_API";
export const GET_RECIPES_BY_DT = "GET_RECIPES_BY_DT";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const GET_RECIPE_BY_ID = "GET_RECIPES_BY_ID";
export const CREATE_RECIPE = "CREATE_RECIPE";

export const fetchRecipes = () => {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3001/recipes");
    const recipes = await res.json();

    dispatch({ type: FETCH_RECIPES, payload: recipes });
  };
};

export const getRecipes = () => {
  return { type: GET_RECIPES };
};

export const getRecipesByApi = () => {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3001/recipes?from=api");
    const recipes = await res.json();

    dispatch({ type: FETCH_RECIPES, payload: recipes });
  };
};

export const getRecipesByDt = () => {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3001/recipes?from=dt");
    const recipes = await res.json();

    dispatch({ type: FETCH_RECIPES, payload: recipes });
  };
};

export const getRecipeByName = (name) => {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/recipes?name=${name}`);
    const recipe = await res.json();

    dispatch({ type: FETCH_RECIPES, payload: recipe });
  };
};

export const getRecipeById = (id) => {
  return async function (dispatch) {
    const res = await fetch(`http://localhost:3001/recipes/${id}`);
    const recipe = await res.json();

    dispatch({ type: FETCH_RECIPES, payload: recipe });
  };
};

export const createRecipe = ({ title, summary, healthScore, instructions }) => {
  return async function (dispatch) {
    const res = await fetch("http://localhost:3001/recipes", {
      method: "POST",
      body: JSON.stringify({ title, summary, healthScore, instructions }),
    });
    const createdRecipe = await res.json();

    dispatch({ type: FETCH_RECIPES, payload: createdRecipe });
  };
};
