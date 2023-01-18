const { Router } = require("express");
const { getDiets } = require("../controllers/dietController");

const dietRouter = Router();

dietRouter.get("/", async (req, res) => {
  try {
    const diets = await getDiets();
    res.status(200).json(diets);
  } catch (err) {
    res.status(404).json({ err: err.message });
  }
});

module.exports = dietRouter;
