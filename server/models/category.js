'use strict';
module.exports = (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: DataTypes.STRING
  }, {});
  category.associate = function(models) {
    category.hasOne(models.vehicle, {foreignKey: 'category_id', sourceKey: 'id'});
  };
  return category;
};