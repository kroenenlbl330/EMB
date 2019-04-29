const express = require('express')
const consolidate = require('consolidate')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const cookieSession = require('cookie-session')

const app = express()

app.set('views','dist');
app.set('view engine','html');
app.engine('html',consolidate.ejs);

// app.use(express.bodyParser())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static('dist'))

// cookie
app.use(cookieParser())
var keys = []
for(var i=0; i<100000; i++){
    keys[i]="^*RG"+Math.random()
}
app.use(cookieSession({
    name: 'admin_id',
    keys: keys,
    maxAge: 60*60*1000
}))


app.listen(4000,function(){
  console.log('Port 4000 was successfully run')
})

app.use('/',require('./controllers/home.js')())
app.use('/',require('./controllers/login.js')())
app.use('/',require('./controllers/watermeter.js')())
app.use('/',require('./controllers/watercollect.js')())
app.use('/',require('./controllers/otheroptions.js')())
// app.use('/',require('./controllers/watermeter.detail.js')())
// app.use('/fill',require('./controllers/fill.js')())