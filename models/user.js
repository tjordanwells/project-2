module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("User", {
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
      validate: {
        len: [10, 100],
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 255]
      }
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4, 50]
      }
    }
  });

  User.associate = function(models) {
    models.User.hasMany(models.Income, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });

    models.User.hasMany(models.Expense, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });

    models.User.hasMany(models.Category, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });

    models.User.hasMany(models.subCategory, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};
