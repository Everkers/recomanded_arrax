const Song = require('../modules/Song')
function addSong(body){ //add song function
    const {artist , name ,artwork}  = body;
    const song = new Song({
        Artist : artist,
        Artwork : artwork,
        Name : name
    })
    
    song.save()
    .catch(err=>{
        console.log(err)
    })
}
module.exports = addSong //export function