const mongoose = require('mongoose')

const applicationSchema = new mongoose.Schema({
	title: { type: String },
	description: { type: String },
	category: {
		type: String,
		enum: ['medical leave', 'other'],
		lowercase: true,
	},
})

module.exports = mongoose.model('Application', applicationSchema)
