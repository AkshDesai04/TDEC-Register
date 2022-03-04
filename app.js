const express = require('express')
const path = require('path')
const ejsMate = require('ejs-mate')
const app = express()

app.engine('ejs', ejsMate)

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
	res.send('TDEC HOME PAGE')
})

app.get('/dashboard', (req, res) => {
	res.render('dashboard')
})

app.listen(3000, () => {
	console.log('SERVER STARTED AT PORT 3000!')
})
