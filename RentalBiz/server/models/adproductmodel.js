const mongoose = require('mongoose');

const adproductschema = mongoose.Schema({
    name: String,
    description: String,
    isrent: Boolean,
    isbuy: Boolean,
    categoryid: mongoose.SchemaTypes.ObjectId,
    locationlong: String,
    locationlat: String,
    price: Number,
    isnegotiable: Boolean,
    isdailybasis: Boolean,
    ismonthlybasis: Boolean,
    isfixedbasis: Boolean,
    isshowcontact: Boolean,
    userid: mongoose.SchemaTypes.ObjectId,
    isactive:Boolean
});

module.exports = mongoose.model('adproduct', adproductschema);