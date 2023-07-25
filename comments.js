// Create web server
var express = require('express');
var router = express.Router();

// Import mongoose
var mongoose = require('mongoose');

// Connect to database
mongoose.connect('mongodb://localhost:27017/test');

// Create a schema
var commentSchema = new mongoose.Schema({
	name: String,
	comment: String,
	created_at: Date
});

// Create a model
var Comment = mongoose.model('Comment', commentSchema);

// Create a new comment
// var newComment = new Comment({
// 	name: 'Khanh',
// 	comment: 'This is a comment',
// 	created_at: Date.now()
// });

// Save comment to database
// newComment.save(function(err, comment){
// 	if(err) throw err;
// 	console.log(comment);
// });

// Get all comments from database
// Comment.find(function(err, comments){
// 	if(err) throw err;
// 	console.log(comments);
// });

// Get comments by name
// Comment.find({name: 'Khanh'}, function(err, comments){
// 	if(err) throw err;
// 	console.log(comments);
// });

// Get comments by name and comment
// Comment.find({name: 'Khanh', comment: 'This is a comment'}, function(err, comments){
// 	if(err) throw err;
// 	console.log(comments);
// });

// Get comments by name and comment and limit
// Comment.find({name: 'Khanh', comment: 'This is a comment'}, null, {limit: 2}, function(err, comments){
// 	if(err) throw err;
// 	console.log(comments);
// });

// Get comments by name and comment and limit and sort by name
// Comment.find({name: 'Khanh', comment: 'This is a comment'}, null, {limit: 2, sort: {name: -1}}, function(err, comments){
// 	if(err) throw err;
// 	console.log(comments);
// });

// Get comments by name and comment and limit and sort by name and select name
// Comment.find({name: 'Khanh', comment: 'This is a comment'}, 'name', {limit: 2, sort: {name: -1}}, function(err, comments){
// 	if(err) throw err;
// 	console.log(comments);
// });

// Get comments by name and comment and limit and sort by name and select