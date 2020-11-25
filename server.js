const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const router = require('./routes/router');
const upload = require('./middlewares/uploadMiddleware');



app.use('/upload', router);


app.use(express.static('public'));
app.set('view engine', 'ejs');
app.listen(port, function () {
	console.log('Server is running on PORT', port);
});