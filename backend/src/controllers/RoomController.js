const {Room} = require('../models')
const Sequelize = require('sequelize')
const Op = Sequelize.Op

module.exports = {
    async getRooms(req, res) {
        try {
            let rooms = null
            // noinspection JSCheckFunctionSignatures
            rooms = await Room.findAll({attributes: ['id', 'roomName', 'isStairs', 'comments']})
            res.send(rooms)
        } catch (err) {
            res.status(400).send({
                    error: err
                }
            )
        }
    },
    async addRoom(req, res) {
        try {
            const room = await Room.create(req.body)
            console.log(room.toJSON())
            res.send({ok: 'ok'})
        } catch (err) {
            res.status(400).send({
                error: err
            })
        }
    },
    async queryRooms(req, res) {
        try {
            let rooms = null
            // noinspection JSCheckFunctionSignatures
            rooms = await Room.findAll({
                attributes: ['id', 'roomName', 'comments'],
                where: {
                    roomName: {
                        [Op.like]: '%' + req.body.query + '%'
                    }
                }
            })
            res.send(rooms)

        } catch (err) {
            res.status(400).send({
                error: err
            })
        }
    },
    async deleteRoom(req, res) {
        try {
            const delRoom = await Room.destroy({
                where: {
                    id: req.body.id
                }
            })
            console.log(delRoom.toJSON())
            res.send({ok: 'ok'})
        } catch (err) {
            res.status(400).send({
                error: err
            })
        }
    }
}