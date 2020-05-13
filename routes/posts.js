const express = require('express');
const router = express.Router();
const Post = require('../model/Post');

router.get('/', async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).json(posts);
	} catch (err) {
		res.status(500).json({ err: err });
	}
});

router.post('/', async (req, res) => {
	const post = new Post({
		title: req.body.title,
		description: req.body.description
	});
	try {
		const savedPost = await post.save();
		res.status(201).json(savedPost);
	} catch (err) {
		res.status(500).json({ err: err });
	}
});

router.get('/:postId', async (req, res) => {
	const id = req.params.postId;
	try {
		const post = await Post.findById(id);
		if (post) {
			res.status(200).json(post);
		} else {
			res.status(404).json({ err: 'Post not found' });
		}
	} catch (err) {
		res.status(500).json({ err: err });
	}
});

router.delete('/:postId', async (req, res) => {
	const id = req.params.postId;
	try {
		const removedPost = await Post.deleteOne({ _id: id });
		res.status(200).json(removedPost);
	} catch (err) {
		res.status(500).json({ err: err });
	}
});

router.patch('/:postId', async (req, res) => {
	const id = req.params.postId;
	try {
		const updatedPost = await Post.updateOne({ _id: id }, { $set: { title: req.body.title } });
		res.status(200).json(updatedPost);
	} catch (err) {
		res.status(500).json({ err: err });
	}
});

module.exports = router;
