const mongoose = require('mongoose');
//define the  monogdb connection url
const mongoURL = 'mongodb://localhost:27017/hotels'
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})//manadatory part no questions
const db = mongoose.connection;
//define event listeners for database connection
db.on('connected', () => {
    console.log('connected to mongoDB server');
})
db.on('error', () => {
    console.log('mongodb connection error:', err);
})
db.on('disconnected', () => {
    console.log('mongodb connection is disconnected');
})
//export the database  connection
module.exports = db;


