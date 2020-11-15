const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const usersRoutes = require('./routes/users');

const app = express();
///app.listen(port, hostane)
//app.listen(3000, '127.0.0.1');
app.listen(3000, () => {
    console.log('Server is listening at http://localhost:3000');
});

///Midleware - uzywaj przed sciezkami
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static'),));

app.use(cookieParser());

usersRoutes(app);


