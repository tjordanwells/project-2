module.exports = function(sequelize, DataTypes) {
  var Income = sequelize.define("Income", {
    incomeSource: {
      type: DataTypes.STRING,
      validate: {
        len: [3 - 100]
      }
    },
    plan: {
      type: DataTypes.DECIMAL(12, 2),
      validate: {
        len: [1],
        isNumeric: true
      }
    },
    effectiveDate: {
      type: DataTypes.DATEONLY,
      validate: {
        isDate: true
      }
    }
  });

  Income.associate = function(models) {
    models.Income.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Income;
};
