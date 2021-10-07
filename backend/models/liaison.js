'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Liaison extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Liaison.init({
    date: DataTypes.STRING,
    consomateur: DataTypes.STRING,
    ea_d: DataTypes.INTEGER,
    er_d: DataTypes.INTEGER,
    ea_f: DataTypes.INTEGER,
    er_f: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Liaison',
  });
  return Liaison;
};