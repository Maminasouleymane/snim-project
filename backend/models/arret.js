"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Arret extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Arret.init(
    {
      date: DataTypes.STRING,
      groupe: DataTypes.STRING,
      defaut: DataTypes.STRING,
      codeDefaut: DataTypes.STRING,
      typeDefaut: DataTypes.STRING,
      section: DataTypes.STRING,
      dateDebut: DataTypes.STRING,
      dateFin: DataTypes.STRING,
      dureeHM: DataTypes.STRING,
      duree: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Arret",
    }
  );
  return Arret;
};
