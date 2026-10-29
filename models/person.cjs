const mongoose = require('mongoose');

const schemaPerson = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    work: {
        type: String,
        enum: ['chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: false,
        unique: true
    }
});

const Person = mongoose.model('Person', schemaPerson);
module.exports = Person;