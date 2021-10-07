'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class groupe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  groupe.init({
    date: DataTypes.STRING,
    numero: DataTypes.STRING,
    ep: DataTypes.FLOAT,
    hmarche: DataTypes.FLOAT,
    np: DataTypes.INTEGER,
    huile: DataTypes.INTEGER,
    comb: DataTypes.INTEGER,
    ap: DataTypes.FLOAT,
    ai: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'groupe',
  });
  return groupe;
};