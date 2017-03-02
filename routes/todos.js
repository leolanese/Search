var express = require('express');
var router = express.Router();

var Search = require('../models/Search.js');

/* GET /todos listing. */
router.get('/', function(req, res, next) {
  Search.find(function (err, todos) {
    console.log("todos");
    if (err) return next(err);
    res.json(todos);
  });
});

/* POST /todos */
router.post('/', function(req, res, next) {
  Search.create(req.body, function (err, post) {
    console.log("todos");
    if (err) return next(err);
    res.json(post);
  });
});

/* GET /todos/id */
router.get('/:id', function(req, res, next) {
  Search.findById(req.params.id, function (err, post) {
        console.log("todos");
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /todos/:id */
router.put('/:id', function(req, res, next) {
  Search.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
        console.log("todos");
    if (err) return next(err);
    res.json(post);
  });
});

/* DELETE /todos/:id */
router.delete('/:id', function(req, res, next) {
  Search.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        console.log("todos");
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
