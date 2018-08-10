module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    expense: {
      type: DataTypes.STRING,
      validate: {
        len: [10 - 100]
      }
    },
    plan: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1],
        isNumeric: true
      }
    },
    spent: {
      type: DataTypes.INTEGER,
      validate: {
        len: [1],
        isNumeric: true
      }
    }
  });

  Food.associate = function(models) {
    Food.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Food;
};
