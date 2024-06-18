//Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var comments = require('./comments.json');

//Get all comments
app.get('/comments', function(req, res) {
    res.json(comments);
});

//Get comment by id
app.get('/comments/:id', function(req, res) {
    var comment = comments.filter(function(comment) {
        return comment.id == req.params.id;
    });
    res.json(comment[0]);
});

//Add comment
app.post('/comments', function(req, res) {
    var comment = {
        id: comments.length + 1,
    }
});