const express = require('express');
const router = express.Router();
const Songs = require('../../modules/Song')
router.get('/' , async(req , res)=>{ //get all the recommended songs
    try{
        const songs = await Songs.find();
        res.json(songs)
    }
    catch(err){
        res.json({message:err})
    }
})
module.exports = router