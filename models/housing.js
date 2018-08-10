module.exports = function(sequelize, DataTypes) {
  var Housing = sequelize.define("Housing", {
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

  Housing.associate = function(models) {
    Housing.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return Housing;
};
