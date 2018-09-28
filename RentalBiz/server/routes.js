const Routes = require('express').Router();

const cateogryroutes = require('./category');
const userroutes = require('./rentaluser');
const adproductroutes = require('./adproduct');
const userenquiryroutes = require('./userenquiry');
const adproductenquiryroutes = require('./adproductenquiry');

Routes.use("/category", cateogryroutes);
Routes.use("/user", userroutes);
Routes.use("/adproduct", adproductroutes);
Routes.use("/userenquiry", userenquiryroutes);
Routes.use("/userenquiry", adproductenquiryroutes);

module.exports = Routes;

