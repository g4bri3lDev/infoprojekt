const {Room} = require('../models')

module.exports = {
    async getRooms(req, res) {
        try {
            let rooms = null
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
    }
}