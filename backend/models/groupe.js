'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Groupe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Groupe.init({
    date: DataTypes.STRING,
    numero: DataTypes.STRING,
    ep: DataTypes.FLOAT,
    hmarche: DataTypes.FLOAT,
    np: DataTypes.INTEGER,
    huile: DataTypes.INTEGER,
    comb: DataTypes.INTEGER,
    ap: DataTypes.INTEGER,
    ai: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Groupe',
  });
  return Groupe;
};