module.exports = (sequelize, DataTypes) => {
    var Income = sequelize.define("Income", {
    income_source: {type: DataTypes.STRING},
    plan: {type: DataTypes.INTEGER},
    spent: {type:DataTypes.INTEGER},
    created: {type:DataTypes.STRING},
    modified: {type:DataTypes.STRING},
    dateid: {type: DataTypes.DATE}
    });
    
    return Income;
    };
    