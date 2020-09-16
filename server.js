const express = require('express');
const path = require('path')
const mongoose = require('mongoose');
const app = express();



//body parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//api
const todos = require('./routes/api/todos');
app.use('/api/todos', todos);

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
	// Set static folder
	app.use(express.static('client/build'));

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
	});
}


//mongodb
const db = require('./config/keys').MONGO_URI
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Database connected'))
	.catch(error => console.log(error))


//port
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running at port ${PORT}`));
