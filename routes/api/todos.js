const express = require('express')
const router = express.Router();
const Todo = require('../../model/Todo');
const ObjectId = require('mongodb').ObjectID
const auth = require('../../middleware/auth')


/**
 * @route   GET api/todos
 * @desc    Get All todos
 * @access  Public
 */

router.get('/', async (req, res) => {
	try {
		const todos = await Todo.find({}).sort({ date: "-1" });
		res.status(200).json(todos);
	} catch (err) {
		res.status(500).json({ err: err });
	}
});


/**
 * @route   POST api/todos
 * @desc    Create a Todo
 * @access  Private
 */

router.post('/', auth, async (req, res) => {
	const todo = new Todo({
		title: req.body.title
	});
	try {
		const newTodo = await todo.save();
		res.status(201).json(newTodo);
	} catch (err) {
		res.status(500).json({ err: err });
	}
});


/**
 * @route   DELETE api/todos
 * @desc    DELETE a todo
 * @access  Private
 */

router.delete('/:id', auth, async (req, res) => {
	const todoId = req.params.id;
	try {
		const id = await Todo.findById(todoId)
		if (id) {
			await Todo.deleteOne({ _id: todoId })
			res.status(200).json({ msg: "Todo deleted successfully" });
		} else {
			res.status(404).json({ msg: "Todo not found" });
		}
	} catch (err) {
		res.status(500).json({ err: err.msg });
	}
});

/**
 * @route   POST api/todos
 * @desc    TOGGLE todo completed
 * @access  Private
 */
router.post('/:id', auth, async (req, res) => {
	const todoId = req.params.id;
	try {
		const value = await Todo.findOne({ _id: ObjectId(todoId) })
		if (value) {
			await Todo.updateOne({ _id: ObjectId(todoId) }, { $set: { completed: !value.completed } })
			res.status(200).json({ msg: "Todo updated successfully" });
		} else {
			res.status(404).json({ msg: "Todo not found" });
		}
	} catch (err) {
		res.status(500).json({ err: err.msg });
	}
});


/**
 * @route   PATCH api/todos
 * @desc    UPDATE a todo
 * @access  Private
 */
router.patch('/:id', auth, async (req, res) => {
	const id = req.params.id;
	try {
		await Todo.updateOne({ _id: id }, { $set: { title: req.body.title } });
		res.status(200).json({ msg: "Todo updated successfully" });
	} catch (err) {
		res.status(500).json({ err: err });
	}
});


module.exports = router;
