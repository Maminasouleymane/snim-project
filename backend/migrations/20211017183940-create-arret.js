'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Arrets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        type: Sequelize.STRING
      },
      groupe: {
        type: Sequelize.STRING
      },
      codeDefaut: {
        type: Sequelize.STRING
      },
      typeDefaut: {
        type: Sequelize.STRING
      },
      section: {
        type: Sequelize.STRING
      },
      dateDebut: {
        type: Sequelize.STRING
      },
      dateFin: {
        type: Sequelize.STRING
      },
      dureeHM: {
        type: Sequelize.STRING
      },
      duree: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Arrets');
  }
};