'use strict';
module.exports = (sequelize, DataTypes) => {
  const vehicle = sequelize.define('vehicle', {
    name: DataTypes.STRING,
  }, { timestamps: true});
  vehicle.associate = function(models) {
    vehicle.belongsTo(models.brand, {foreignKey: 'brand_id', sourceKey: 'id'});
    vehicle.belongsTo(models.category, {foreignKey: 'category_id', sourceKey: 'id'});
    vehicle.belongsTo(models.model, {foreignKey: 'model_id', sourceKey: 'id'});
  };
  return vehicle;
};