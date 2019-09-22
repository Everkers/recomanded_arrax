const express =require('express'),
      router = new express.Router(),
      addSong = require('../../utils/add'), //add song 
      isExist = require('../../utils/isExist') // check if song exists on the db 

router.post('/' , (req , res)=>{ // handle post 
         const {artist , name ,artwork}  = req.body.data;
        if(!artist , !name , !artwork){ //check if there is no parameters
            res.send({message:'the params is required please add them and try again'})
        }
        let findIt = null;
        isExist(req.body.data).then(result=>{ //get the result from isexist function to check if the song exists or not
            findIt = result
        }).then(()=>{
            if(findIt){ //checking exists value
                res.send({message:'this song is already on our database'})
            }
            else{ //The song is not exists yet so it should added to the database
                res.send({message:'the song has been added to the database!'})
                addSong(req.body.data)
            }
        })
     

});
module.exports = router