const mongoose = require('mongoose');

const userenquiryschema = mongoose.Schema({
    title: String,
    description: String,
    categoryid: mongoose.SchemaTypes.ObjectId,
    isrent:Boolean,
    isbuy:Boolean,
    rentdays:Number,
    ismonthlybasis:Boolean,
    UserID:mongoose.SchemaTypes.ObjectId
});

exports.module = mongoose.model('userenquiry', userenquiryschema);