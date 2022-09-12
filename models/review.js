'use strict'
const { Model } = require('sequelize')
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, { foreignKey: 'userId' })
      Review.belongsTo(models.Spa, { foreignKey: 'spaId' })
    }
  }
  Review.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
        }
      },
      spaId: {
        type: DataTypes.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'spas',
          key: 'id'
        }
      },
      title: DataTypes.STRING,
      review: DataTypes.TEXT,
      rating: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews'
    }
  )
  return Review
}
