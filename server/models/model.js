'use strict';
module.exports = (sequelize, DataTypes) => {
  const model = sequelize.define('model', {
    name: DataTypes.STRING
  }, {});
  model.associate = function(models) {
    model.hasOne(models.vehicle, {foreignKey: 'model_id', sourceKey: 'id'});
  };
  return model;
};