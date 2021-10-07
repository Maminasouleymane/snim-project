'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class arret extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  arret.init({
    date: DataTypes.STRING,
    groupe: DataTypes.STRING,
    defaut: DataTypes.STRING,
    code_defaut: DataTypes.STRING,
    type_defaut: DataTypes.STRING,
    section: DataTypes.STRING,
    h_debut: DataTypes.STRING,
    h_fin: DataTypes.STRING,
    duree_hm: DataTypes.STRING,
    duree_heure: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'arret',
  });
  return arret;
};