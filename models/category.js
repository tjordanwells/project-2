module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    category: {
      type: DataTypes.STRING,
      validate: {
        len: [3 - 100]
      }
    }
  });

  Category.associate = function(models) {
    models.Category.hasMany(models.Expense, {
      foreignKey: {
        allowNull: false
      }
    });

    models.Category.hasMany(models.subCategory, {
      foreignKey: {
        allowNull: false
      }
    });

    models.Category.belongsTo(models.User, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Category;
};
