const routes = require('express').Router();

const mongoose = require('mongoose');
const RentalUser = require('./models/rentalusermodel');


routes.get('/', (req, res) => {
    RentalUser.find({}).exec().then(result => {
        res.status(200).json(result);
    });
});
routes.get('/:userid', (req, res) => {
    RentalUser.find({ "_id": req.params.userid }).exec().then(result => {
        res.status(200).json(result);
    });
});
routes.post('/login', (req, res) => {
    RentalUser.find({ "email": req.body.email, "password": req.body.password }).exec().then(result => {
        res.status(200).json((result.length==0)?false:{token:res._id});
    });
});
routes.post('/register', (req, res) => {
    const rentaluser = new RentalUser({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        mobileno: req.body.mobileno,
        isfblogin: req.body.isfblogin,
        isgmaillogin: req.body.isgmaillogin,
        isadmin: req.body.isadmin
    });
    rentaluser.save().then(result => {
        res.status(200).json({ message: "record saved successfully", model: rentaluser });
    },
        err => res.status(500).json({ message: err })
    );
});
routes.post('/forgetpassword', (req, res) => {
    res.send({ message: "this will retreive user password" });
});
routes.post('/checkemailexist',(req,res)=>{
    RentalUser.find({ "email": req.body.email}).exec().then(result => {
        res.status(200).json((result.length==0)?false:true);
    });
})

module.exports = routes;