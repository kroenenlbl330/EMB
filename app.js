const express = require('express')
const consolidate = require('consolidate');
const bodyParser = require('body-parser')

const app = express()

app.set('views','dist');
app.set('view engine','html');
app.engine('html',consolidate.ejs);

// app.use(express.bodyParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'))

app.listen(4000,function(){
  console.log('Port 4000 was successfully run')
})

app.use('/',require('./controllers/watermeter.js')())
app.use('/',require('./controllers/watercollect.js')())
app.use('/',require('./controllers/otheroptions.js')())
// app.use('/',require('./controllers/watermeter.detail.js')())
// app.use('/fill',require('./controllers/fill.js')())