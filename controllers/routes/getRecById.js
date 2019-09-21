const express = require('express');
const router = express.Router();
const Songs = require('../../modules/Song')
router.get('/:id' , async (req , res)=>{
    try{
        const song = await Songs.findById(req.params.id); //get song by id
        res.send(song)
    }
    catch(err){
        res.status(404).send({message:'cannot find a song with this id.'})
    }
})
module.exports = router