"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("vehicle", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      brand: {
        type: Sequelize.STRING,
      },
      model: {
        type: Sequelize.STRING,
      },
      category: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },

      // brand_id: {
      //   type: Sequelize.INTEGER,
      // },
      // category_id: {
      //   type: Sequelize.INTEGER,
      // },
      // model_id: {
      //   type: Sequelize.INTEGER,
      // },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("vehicles");
  },
};
