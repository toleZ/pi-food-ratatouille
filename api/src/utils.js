const { Diet } = require("./db");

const createDiets = async () => {
  const diets = [
    "Gluten Free",
    "Ketogenic",
    "Vegetarian",
    "Lacto-Vegetarian",
    "Ovo-Vegetarian",
    "Vegan",
    "Pescetarian",
    "Paleo",
    "Primal",
    "Low FODMAP",
    "Whole30",
  ];

  diets.forEach(
    async (diet) =>
      await Diet.findOrCreate({
        where: { name: diet },
      })
  );
};

module.exports = { createDiets };
