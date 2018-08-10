module.exports = function(sequelize, DataTypes) {
  var Transportation = sequelize.define("Transportation", {
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

  Transportation.associate = function(models) {
    Transportation.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Transportation;
};
