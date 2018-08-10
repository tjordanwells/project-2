module.exports = function(sequelize, DataTypes) {
  var Income = sequelize.define("Income", {
    incomeSource: { type: DataTypes.STRING },
    plan: { type: DataTypes.INTEGER },
    spent: { type: DataTypes.INTEGER }
  });

  return Income;
};
