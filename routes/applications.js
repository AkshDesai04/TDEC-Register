// REST Routes for Applications

const express = require('express')
const router = express.Router()
const Application = require('../models/application')

const categories = ['Medical Leave', 'Other']

router.get('/', async (req, res) => {
	const applications = await Application.find({})
	res.render('applications/index', { applications })
})

// NEW
router.get('/new', async (req, res) => {
	res.render('applications/new', { categories })
})

router.post('/', async (req, res) => {
	try {
		const application = new Application({ ...req.body.application })
		await application.save()
		res.redirect('/applications')
	} catch (err) {
		res.send(err)
	}
})

// SHOW PAGE
router.get('/:id', async (req, res) => {
	const { id } = req.params
	const application = await Application.findById(id)
	res.render('applications/show', { application })
})

// EDIT
router.get('/:id/edit', async (req, res) => {
	const { id } = req.params
	const application = await Application.findById(id)
	res.render('applications/edit', { application, categories })
})

router.put('/:id', async (req, res) => {
	const { id } = req.params
	await Application.findByIdAndUpdate(id, { ...req.body.application })
	res.redirect(`/applications/${id}`)
})

// DELETE/DESTROY

router.delete('/:id', async (req, res) => {
	const { id } = req.params
	await Application.findByIdAndDelete(id)
	res.redirect('/applications')
})

module.exports = router

// ROUTES:

// GET  	/applications			-->		show all applications					✅
// GET  	/applications/new		-->		show form to create application			✅
// POST 	/applications			-->		create application					C   ✅
// GET  	/applications/:id		-->		show application details page 		R	✅
// GET  	/applications/:id/edit	-->		show form to update application			✅
// PUT  	/applications/:id		-->		update application					U	✅
// DELETE 	/applications/:id		-->		delete application					D   ✅
