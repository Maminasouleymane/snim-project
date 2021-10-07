'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Liaisons', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      consomateur: {
        type: Sequelize.STRING
      },
      ea_d: {
        type: Sequelize.INTEGER
      },
      er_d: {
        type: Sequelize.INTEGER
      },
      ea_f: {
        type: Sequelize.INTEGER
      },
      er_f: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Liaisons');
  }
};