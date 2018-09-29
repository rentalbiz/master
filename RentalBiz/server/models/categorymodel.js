
const mongoose = require('mongoose');

const categoryschema = mongoose.Schema({
    categoryid: Number,
    name: String,
    description: String,
    categoryicon: String,
    parentcategoryid: Number

});

module.exports = mongoose.model('category', categoryschema);