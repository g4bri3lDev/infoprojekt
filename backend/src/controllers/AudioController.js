const player = require('play-sound')(opts = {});
module.exports = {
    async MPlayer(req,res){

    player.MPlayer('../../audio/Skidaddle_Skidoodle.opus', function(err){
            if (err) throw err
        }

    )
      res.send({ok:'ok'})
}




}