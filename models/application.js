const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
	title: { type: [String, 'Title must be String'] },
	description: { type: [String, 'Description must be String'] },
})

module.exports = mongoose.model('Application', applicationSchema)
