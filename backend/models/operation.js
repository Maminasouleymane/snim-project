'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Operation extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Operation.init({
    date: DataTypes.STRING,
    op1: DataTypes.INTEGER,
    op2: DataTypes.INTEGER,
    op3: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Operation',
  });
  return Operation;
};