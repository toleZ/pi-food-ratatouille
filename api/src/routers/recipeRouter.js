const { Router } = require("express");
const {
  getRecipesDT,
  getRecipesAPI,
  getRecipes,
  getRecipeByName,
  getRecipeById,
  createRecipe,
} = require("../controllers/recipeController");

const recipeRouter = Router();

recipeRouter.get("/", async (req, res) => {
  const { name, from } = req.query;

  if (from === "dt") {
    try {
      const recipes = await getRecipesDT();
      res.status(200).json(recipes);
    } catch (err) {
      res.status(404).json({ err: err.message });
    }
  } else if (from === "api") {
    try {
      const recipes = await getRecipesAPI();
      res.status(200).json(recipes);
    } catch (err) {
      res.status(404).json({ err: err.message });
    }
  } else {
    try {
      const recipe = name ? await getRecipeByName(name) : await getRecipes();
      res.status(200).json(recipe);
    } catch (err) {
      res.status(404).json({ err: err.message });
    }
  }
});

recipeRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const recipe = await getRecipeById(id);
    res.status(200).json(recipe);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
});

recipeRouter.post("/", async (req, res) => {
  const { title, summary, healthScore, instructions } = await req.body;

  if (!title || !summary || !healthScore || !instructions)
    return res.status(404).json({ err: "Missing data" });

  try {
    const newRecipe = await createRecipe(
      title,
      summary,
      healthScore,
      instructions
    );
    res.status(200).json(newRecipe);
  } catch (err) {
    res.status(400).json({ err: err.message });
  }
});

module.exports = recipeRouter;
