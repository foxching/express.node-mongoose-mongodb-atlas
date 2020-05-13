const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const postRouter = require('./routes/posts');

//Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/posts', postRouter);

app.get('/', (req, res) => {
	res.send('We are on home');
});

mongoose.connect(
	'mongodb://rechie:iloveRuthy123@cluster0-shard-00-00-f4fzr.mongodb.net:27017,cluster0-shard-00-01-f4fzr.mongodb.net:27017,cluster0-shard-00-02-f4fzr.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true },
	() => {
		console.log('Connected to DB');
	}
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
