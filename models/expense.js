module.exports = function(sequelize, DataTypes) {
  var Expense = sequelize.define("Expense", {
    expense: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3 - 100]
      }
    },
    plan: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: false,
      validate: {
        len: [1],
        isNumeric: true
      }
    },
    planDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      validate: {
        isDate: true
      }
    },
    spent: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
      validate: {
        len: [1],
        isNumeric: true
      }
    },
    spentDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
        isDate: true
      }
    }
  });

  Expense.associate = function(models) {
    models.Expense.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    models.Expense.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });

    models.Expense.belongsTo(models.subCategory, {
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Expense;
};
