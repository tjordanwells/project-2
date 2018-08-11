module.exports = function(sequelize, DataTypes) {
  var Category = sequelize.define("Category", {
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3 - 100]
      }
    }
  });

  Category.associate = function(models) {
    models.Category.hasMany(models.Plan, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });

    models.Category.hasMany(models.Spent, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });

    models.Category.hasMany(models.subCategory, {
      onDelete: "cascade",
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
