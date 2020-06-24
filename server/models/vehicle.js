"use strict";
module.exports = (sequelize, DataTypes) => {
  const vehicle = sequelize.define(
    "vehicle",
    {
      brand: DataTypes.STRING,
      model: DataTypes.STRING,
      category: DataTypes.STRING,
      price: DataTypes.INTEGER,
    },
    { timestamps: true }
  );
  // vehicle.associate = function (models) {
  //   vehicle.belongsTo(models.brand, {
  //     foreignKey: "brand_id",
  //     sourceKey: "id",
  //   });
  //   vehicle.belongsTo(models.category, {
  //     foreignKey: "category_id",
  //     sourceKey: "id",
  //   });
};
return vehicle;
