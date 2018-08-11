module.exports = function(sequelize, DataTypes) {
  var subCategory = sequelize.define("subCategory", {
    subCategory: {
      type: DataTypes.STRING,
      validate: {
        len: [3 - 100]
      }
    }
  });

  subCategory.associate = function(models) {
    models.subCategory.hasMany(models.Expense, {
      foreignKey: {
        allowNull: true
      }
    });

    models.subCategory.belongsTo(models.Category, {
      foreignKey: {
        allowNull: false
      }
    });

    models.subCategory.belongsTo(models.User, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return subCategory;
};
