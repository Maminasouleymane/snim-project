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
      ead: {
        type: Sequelize.INTEGER
      },
      erd: {
        type: Sequelize.INTEGER
      },
      eaf: {
        type: Sequelize.INTEGER
      },
      erf: {
        type: Sequelize.INTEGER
      },
      ea: {
        type: Sequelize.INTEGER
      },
      er: {
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