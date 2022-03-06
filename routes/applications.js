// REST Routes for Applications

const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
	res.send('ALL APPLICATIONS')
})

module.exports = router

// ROUTES:

// GET  	/applications			-->		show all applications
// GET  	/applications/new		-->		show form to create application
// POST 	/applications			-->		create application					C
// GET  	/applications/:id		-->		show application details page 		R
// GET  	/applications/:id/edit	-->		show form to update application
// PUT  	/applications/:id		-->		update application					U
// DELETE 	/applications/:id		-->		delete application					D
