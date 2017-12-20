var express = require('express');
var app = express();
var port = process.env.PORT || 80;
app.use(express.static('static'));
app.use('/static', express.static('static'));
app.listen(port);