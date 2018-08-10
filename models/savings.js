module.exports = function(sequelize, DataTypes) {
  var Savings = sequelize.define("Savings", {
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

  Savings.associate = function(models) {
    Savings.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Savings;
};
