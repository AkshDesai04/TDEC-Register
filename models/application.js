const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
	title: { type: [String, 'Title must be String'] },
	description: { type: [String, 'Description must be String'] },
	category: {
		type: [String, 'Please Select a valid category'],
		enum: ['Medical Leave', 'Other'],
	},
})

module.exports = mongoose.model('Application', applicationSchema)
