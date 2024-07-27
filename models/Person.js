const mongoose = require('mongoose');
//define the person schema

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number

    },
    work: {
        type: String,
        enum: ['Chef', 'waiter', 'manager'],
        required: true
    },
    mobile:
    {
        type: String,

    },
    email: {
        type: String,
        required: true,
        unique: true

    },
    address: {
        type: String,

    },
    salary: {
        type: Number,
        required: true
    }
});

//create poerson model 
const Person = mongoose.model('Person', personSchema);
module.exports = Person;




