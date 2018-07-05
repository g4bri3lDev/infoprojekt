const player = require('play-sound')(opts = {});
module.exports = {
    async play(req,res){

    player.play('../../audio/Skidaddle_Skidoodle.opus', function(err){
            if (err) throw err
        }

    )
      res.send({ok:'yeet'})
}




}
//-Constantin Geiger
