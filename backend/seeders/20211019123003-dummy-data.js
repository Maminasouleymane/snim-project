"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "groupes",
      [
        {
          date: "22/09/2021",
          numero: "GR7",
          ep: 12,
          hmarche: 1213,
          np: 3443,
          huile: 434,
          comb: 543,
          ap: 2342,
          ai: 12,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "22/08/2021",
          numero: "GR8",
          ep: 12,
          hmarche: 1213,
          np: 3443,
          huile: 434,
          comb: 543,
          ap: 2342,
          ai: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          date: "22/07/2021",
          numero: "GR10",
          ep: 12,
          hmarche: 1213,
          np: 3443,
          huile: 434,
          comb: 543,
          ap: 2342,
          ai: 11,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Groupe", null, {});
  },
};
