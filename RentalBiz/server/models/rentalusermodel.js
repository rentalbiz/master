const mongoose = require('mongoose');

const rentaluserschema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    mobileno: String,
    isfblogin: Boolean,
    isgmaillogin: Boolean,
    isadmin: Boolean
});

module.exports = mongoose.model('rentaluser', rentaluserschema);