const { json } = require('express');
const express = require('express')
require('dotenv').config()
const jwt = require('jsonwebtoken')
const route = express.Router();
const Book = require('../Model/bookSchema');

route.get('/api/v1/books',(req, res) => {
     
    Book.aggregate([{$sample:{size:10}}]).then((books) => {
        res.send(books)
    })

})

route.get('/api/v1/books/:bookname',(req, res) => {
    const bookname = req.params.bookname;

    Book.find({bookname}).limit(10).then((books) => {
        res.send(books)
    })

})





module.exports = route;