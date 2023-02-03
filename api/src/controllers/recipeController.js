const { Recipe } = require("../db.js");
const { API_KEY } = process.env;
const axios = require("axios");

const getRecipesDT = async () => {
  const recipes = await Recipe.findAll();

  if (!recipes) throw Error('The database "food" its empty');
  return recipes;
};

const getRecipesAPI = async () => {
  const url = `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`;

  const res = await axios.get(url);
  return await res.data;
};

const getRecipes = async () => {
  const dt = await getRecipesDT();
  const api = await getRecipesAPI();

  return [...dt, ...api.results];
};

const getRecipeByName = async (recipeName) => {
  const recipes = await getRecipes();
  const recipesFiltered = recipes.filter((r) =>
    r.title.toLowerCase().includes(recipeName.toLowerCase())
  );

  if (!recipesFiltered.length)
    throw Error(`Didn't found recipe with name:${recipeName}`);
  return recipesFiltered;
};

const getRecipeById = async (id) => {
  const recipes = await getRecipes();
  const recipe = recipes.find((r) => r.id == id);

  if (!recipe) throw Error(`Didn't found recipe with id: ${id}`);
  return recipe;
};

const createRecipe = async (
  title,
  summary,
  healthScore,
  instructions,
  image,
  dietsAlloweds,
  readyInMinutes,
  servings,
  pricePerServing
) => {
  const recipes = await getRecipes();
  const itAlreadyExists = await recipes.find((r) => r.title === title);

  if (itAlreadyExists)
    throw Error(`It already exists recipe with title: ${title}`);

  const newRecipe = await Recipe.create({
    title,
    summary,
    healthScore,
    instructions,
    image,
    dietsAlloweds,
    readyInMinutes,
    servings,
    pricePerServing,
  });

  return newRecipe;
};

module.exports = {
  getRecipesDT,
  getRecipesAPI,
  getRecipes,
  getRecipeByName,
  getRecipeById,
  createRecipe,
};
