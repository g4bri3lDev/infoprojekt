module.exports = (sequelize, DataTypes) =>
    sequelize.define('Route', {
        routeName: {
            type: DataTypes.STRING,
        },
        from: {
            type: DataTypes.INTEGER
        },
        to: {
            type: DataTypes.INTEGER
        },
        weight: {
            type: DataTypes.INTEGER
        }
    })
