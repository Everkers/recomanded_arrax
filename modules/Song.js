const mongoose = require('mongoose');
const SongSchema = mongoose.Schema({
    _Id:mongoose.Schema.Types.ObjectId,
    Artist:{
        type:String,
        required:true
    },
    Artwork :{
        type:String,
        required:true
    },
    Name:{
        type:String,
        required:true
    }
})
module.exports = mongoose.model('Songs'  , SongSchema)