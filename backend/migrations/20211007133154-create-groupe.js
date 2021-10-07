'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('groupes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      ep: {
        type: Sequelize.FLOAT
      },
      hmarche: {
        type: Sequelize.FLOAT
      },
      np: {
        type: Sequelize.INTEGER
      },
      huile: {
        type: Sequelize.INTEGER
      },
      comb: {
        type: Sequelize.INTEGER
      },
      ap: {
        type: Sequelize.FLOAT
      },
      ai: {
        type: Sequelize.FLOAT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('groupes');
  }
};