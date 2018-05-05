module.exports = {
    async isOnline(req, res) {
        res.json({
            online: 'Backend is online'
        })
    }
}