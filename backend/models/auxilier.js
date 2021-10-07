'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Auxilier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Auxilier.init({
    date: DataTypes.STRING,
    obb1: DataTypes.FLOAT,
    obb2: DataTypes.FLOAT,
    spedm: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Auxilier',
  });
  return Auxilier;
};