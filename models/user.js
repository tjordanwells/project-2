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
  };

  User.associate = function(models) {
    models.User.hasMany(models.Housing, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };

  User.associate = function(models) {
    models.User.hasMany(models.Food, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };

  User.associate = function(models) {
    models.User.hasMany(models.Transportation, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };

  User.associate = function(models) {
    models.User.hasMany(models.Savings, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };

  User.associate = function(models) {
    models.User.hasMany(models.Debt, {
      onDelete: "cascade",
      foreignKey: {
        allowNull: false
      }
    });
  };

  

  return User;
};
