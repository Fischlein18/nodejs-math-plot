const express = require('express')
const path = require('path')

const app = express()

//enable to set port on Heroku
const port = process.env.PORT || 3000

//---------Define paths for Express config
const publicDirectoryPath = (path.join(__dirname, '../public'))
//by default, hbs fiels are stored in ../views
const viewsPath = path.join(__dirname, '../public/views')

app.set('view engine', 'ejs');
app.set('views', viewsPath)
app.engine('html', require('ejs').renderFile);

app.get('', (req, res) => {
    res.render('index.html');
})

//start the server
app.listen(port, () => {
    console.log(`Server is up on port ${port}.`)
})