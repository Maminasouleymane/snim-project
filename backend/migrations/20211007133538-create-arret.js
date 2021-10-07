'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('arrets', {
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
      defaut: {
        type: Sequelize.STRING
      },
      code_defaut: {
        type: Sequelize.STRING
      },
      type_defaut: {
        type: Sequelize.STRING
      },
      section: {
        type: Sequelize.STRING
      },
      h_debut: {
        type: Sequelize.STRING
      },
      h_fin: {
        type: Sequelize.STRING
      },
      duree_hm: {
        type: Sequelize.STRING
      },
      duree_heure: {
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
    await queryInterface.dropTable('arrets');
  }
};