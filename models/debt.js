module.exports = function(sequelize, DataTypes) {
  var Debt = sequelize.define("Debt", {
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

  Debt.associate = function(models) {
    Debt.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Debt;
};
