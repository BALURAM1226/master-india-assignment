
const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
});

const Book = mongoose.model('books', bookSchema, 'bookdata');

module.exports = Book;

