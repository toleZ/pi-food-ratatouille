const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      summary: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      healthScore: {
        type: DataTypes.INTEGER,
      },
      instructions: {
        type: DataTypes.ARRAY(DataTypes.STRING(300)),
      },
      image: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      dietsAlloweds: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        allowNull: false,
      },
      readyInMinutes: {
        type: DataTypes.INTEGER,
      },
      servings: {
        type: DataTypes.INTEGER,
      },
      pricePerServing: {
        type: DataTypes.FLOAT,
      },
    },
    { timestamps: false }
  );
};
