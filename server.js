const express = require('express'),
      app = express(),
      mongoose = require('mongoose'),
      getRecSongs = require('./controllers/routes/getRecSongs'), //Get route to get the songs
      uploadSong = require('./controllers/routes/uploadSong'), //Post route to post new song
      getById = require('./controllers/routes/getRecById'), //Get Song By Id
      deleteById = require('./controllers/routes/deleteById'), //Delete Song By Id
      port = process.env.PORT || 5000
      require('dotenv/config')

//middlewars
app.use(express.json())
app.use('/api/upload' , uploadSong)
app.use('/api/recomanded' , getRecSongs)
app.use('/api/recomanded' , getById)
app.use('/api/recomanded' , deleteById)


app.listen(port ,()=> console.log(`listining on port ${port}`))

//Connect to db 
mongoose.connect(process.env.DB_CONNECTION ,{ useUnifiedTopology: true  , useNewUrlParser:
    true } ,()=>{
        console.log('connected to DB')
})
mongoose.connection.on('error', err => console.log(err));

