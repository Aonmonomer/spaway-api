'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Spa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Spa.hasMany(models.Review, { foreignKey: 'spaId' })
    }
  }
  Spa.init(
    {
      spaName: DataTypes.STRING,
      phoneNumber: DataTypes.STRING,
      location: DataTypes.STRING,
      description: DataTypes.TEXT,
      imageUrl: DataTypes.TEXT
    },
    {
      sequelize,
      modelName: 'Spa',
      tableName: 'spas'
    }
  )
  return Spa
}
