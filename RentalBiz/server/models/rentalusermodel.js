const mongoose = require('mongoose');

const rentaluserschema = mongoose.Schema({
    userID: Number,
    name: String,
    email: String,
    password: String,
    mobileno: String,
    isfblogin: Boolean,
    isgmaillogin: Boolean,
    isadmin: Boolean
});

module.exports = mongoose.model('rentaluser', rentaluserschema);