const express = require('express');
const router = express.Router();
const Songs = require('../../modules/Song')
router.delete('/:id' , async (req , res)=>{ //remove song by id from the database
    try{
        const song = await Songs.deleteOne({_id : req.params.id});
        res.send({message : 'This song has been removed from the database'})
    }
    catch(err){
        res.send({message:err})
    }
})
module.exports = router