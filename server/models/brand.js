'use strict';
module.exports = (sequelize, DataTypes) => {
  const brand = sequelize.define('brand', {
    name: DataTypes.STRING
  }, {});
  brand.associate = function(models) {
    brand.hasOne(models.vehicle, {foreignKey: 'brand_id', sourceKey: 'id'})
  };
  return brand;
};