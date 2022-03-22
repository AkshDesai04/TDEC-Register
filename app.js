const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const ejsMate = require('ejs-mate')
const methodOverride = require('method-override')

// Router
const applicationRoutes = require('./routes/applications')
const app = express()

mongoose
	.connect('mongodb://localhost:27017/tdec-register')
	.then(() => {
		console.log('DATABASE CONNECTED!')
	})
	.catch(err => {
		console.log(err)
	})

app.engine('ejs', ejsMate)

app.use(express.urlencoded({ extended: true }))

// LET EXPRESS KNOW TO USE EJS AND FROM WHERE
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.use(methodOverride('_method'))

// ROUTES
app.use('/applications', applicationRoutes)

app.get('/', (req, res) => {
	res.send('TDEC HOME PAGE')
})

app.get('/dashboard', (req, res) => {
	res.render('dashboard')
})

app.listen(3000, () => {
	console.log('SERVER STARTED AT PORT 3000!')
})
