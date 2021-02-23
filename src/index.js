const express = require('express')
const app = express()
const path = require('path')
//Settings
app.set('port', 3000);
app.engine('html',require('ejs').renderFile)
//import ejs
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname, 'views'));//Aqui le digo que use la carpeta Views

//Routes
app.use(require('./routes/index'));

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Listening
app.listen(app.get('port'),()=>{
    console.log('Server on port', app.get('port'));
});