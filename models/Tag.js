const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');
console.log (sequelize)
class Tag extends Model {}

Tag.init(
  {
    id: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  {
  tag_name: {
type: DataTypes.STRING,
  },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

module.exports = Tag;