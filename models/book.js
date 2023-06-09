const { DataTypes, Model } = require('sequelize');
const sequelize = require('../database');

module.exports = () => {
  class Book extends Model {
    static associate(models) {
      // define associations here
    }
  }

  Book.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Book',
    }
  );
  return Book;
};
