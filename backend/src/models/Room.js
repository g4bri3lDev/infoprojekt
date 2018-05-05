module.exports = (sequelize, DataTypes) =>
    sequelize.define('Room', {
        roomName: {
            type: DataTypes.STRING,
        },
        isStairs: {
            type: DataTypes.BOOLEAN
        },
        comments: {
            type: DataTypes.STRING
        }
    })
