module.exports = function(sequelize, DataTypes) {
  var Spent = sequelize.define("Spent", {
    entry: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3 - 100]
      }
    },
    amount: {
      type: DataTypes.DECIMAL(12, 2),
      allowNull: true,
      validate: {
        len: [1],
        isNumeric: true
      }
    },
    effectiveDate: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      validate: {
        isDate: true
      }
    }
  });

  Spent.associate = function(models) {
    models.Spent.belongsTo(models.User, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });

    models.Plan.belongsTo(models.Category, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });

    models.Plan.belongsTo(models.subCategory, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: true
      }
    });
  };

  return Spent;
};
