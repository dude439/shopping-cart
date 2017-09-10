var express = require('express');
var app = express();

app.use(express.static('public'));

app.use(express.static(__dirname + '/node_modules'));


app.listen(8000, function(){
    console.log("listening on port 8000!!!!")
});