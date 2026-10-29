const mongoose = require('mongoose');
require('dotenv').config();

const DB_URI = process.env.dbURIAtlas;
console.log('DB_URI:', DB_URI);
mongoose.connect(DB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('open', () => {
  console.log('Connected to MongoDB');
});

db.on('disconnected', () => {
  console.log('Disconnected from MongoDB');
});

module.exports = db;