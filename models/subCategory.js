module.exports = function(sequelize, DataTypes) {
  var subCategory = sequelize.define("subCategory", {
    subCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3 - 100]
      }
    }
  });

  subCategory.associate = function(models) {
    models.subCategory.hasMany(models.Plan, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: true
      }
    });

    models.subCategory.hasMany(models.Spent, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: true
      }
    });

    models.subCategory.belongsTo(models.Category, {
      onDelete: "cascade",
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
