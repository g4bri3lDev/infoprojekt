module.exports = {
    async isOnline(req, res) {
        try {
            res.send({
                status: 'ok'
            })
        } catch (e) {
            console.log(e)
        }
    }
}