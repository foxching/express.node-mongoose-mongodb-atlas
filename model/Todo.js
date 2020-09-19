const mongoose = require('mongoose');

const TodoSchema = mongoose.Schema({
	title: {
		type: String,
		required: true
	},
	completed: {
		type: Boolean,
		default: false
	},
	author: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Todo', TodoSchema);
