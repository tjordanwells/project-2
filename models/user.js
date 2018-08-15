module.exports = function(sequelize, Sequelize) {
  var User = sequelize.define("User", {
    name: {
      type: Sequelize.STRING,
      notEmpty: true
    },

    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },

    password: {
      type: Sequelize.STRING,
      allowNull: false
    },

    last_login: {
      type: Sequelize.DATE
    },

    status: {
      type: Sequelize.ENUM("active", "inactive"),
      defaultValue: "active"
    }
  });

  User.associate = function(models) {
    models.User.hasMany(models.Plan, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: true
      }
    });

    models.User.hasMany(models.Spent, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: true
      }
    });

    models.User.hasMany(models.Category, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: true
      }
    });

    models.User.hasMany(models.subCategory, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: true
      }
    });
  };

  return User;
};
