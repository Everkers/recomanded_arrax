const Song = require('../modules/Song')
async function isExist(song){ //check if song exists function
    const {artist , name ,artwork}  = song;
    let findIt = null
     await Song.findOne({Artist:artist , Name:name , Artwork:artwork},  (err, find)=>{    
        if(err){
            console.log(`Mongo db error ${err}`)
        }
        if(!find && !err){
            findIt =  false
        }
        else{
            findIt =  true
        }
    })
     return findIt
}
module.exports = isExist //export function