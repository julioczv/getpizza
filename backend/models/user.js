'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    birthday: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};