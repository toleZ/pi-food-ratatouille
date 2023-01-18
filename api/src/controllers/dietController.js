const { Diet } = require("../db.js");

const getDiets = async () => {
  const diets = await Diet.findAll();
  return diets;
};

module.exports = { getDiets };
