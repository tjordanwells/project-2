module.exports = function(sequelize, DataTypes) {
  var Misc = sequelize.define("Misc", {
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

  Misc.associate = function(models) {
    Misc.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Misc;
};
