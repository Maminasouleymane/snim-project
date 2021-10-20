"use strict";

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.addColumn("arrets", "defaut", {
      type: Sequelize.STRING,
      after: "groupe",
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn("arrets", "defaut");
  },
};
