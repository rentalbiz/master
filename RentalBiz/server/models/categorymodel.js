
const mongoose = require('mongoose');

const categoryschema = mongoose.Schema({
    categoryid: Number,
    name: String,
    description: String,
    categoryicon: String,
    parentcategoryid: Number,
    type: String

});

module.exports = mongoose.model('data', categoryschema);