module.exports = function(sequelize, DataTypes) {
  var Income = sequelize.define("Income", {
    incomeSource: {
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

  Income.associate = function(models) {
    Income.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Income;
};