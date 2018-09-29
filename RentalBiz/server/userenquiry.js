const routes = require('express').Router();
const mongoose = require('mongoose');
const UserEnquiry = require('./models/userenquirymodel');

routes.get('/', (req, res) => {
    res.send({ message: "this is for all user enquiry" })
});
routes.get('/:userid', (req, res) => {
    UserEnquiry.find({ userid: req.params.userid }).exec().then(result => {
        res.status(200).json(result);
    }, err => {
        res.status(500).json(err);
    });
});
routes.get('/enquirybycategory/:categoryid', (req, res) => {
    UserEnquiry.find({ categoryid: req.params.categoryid }).exec().then(result => {
        res.status(200).json(result);
    }, err => {
        res.status(500).json(err);
    });
});
routes.get('/enquirydetails/:enquiryid', (req, res) => {
    UserEnquiry.find({ _id: req.params.enquiryid }).exec().then(result => {
        res.status(200).json(result)
    }, err => {
        res.status(500).json(err)
    });
});

routes.post('/saveuserenquiry', (req, res) => {
    const userenquirymodel = new UserEnquiry({
        title: req.body.title,
        description: req.body.description,
        categoryid: req.body.categoryid,
        isrent: req.body.isrent,
        isbuy: req.body.isbuy,
        rentdays: req.body.rentdays,
        ismonthlybasis: req.body.ismonthlybasis,
        UserID: req.body.UserID
    });
    userenquirymodel.save().then(result => {
        res.status(200).json({ message: "user enquiry saved successfully", model: userenquirymodel });
    },
        err => res.status(500).json({ message: err })
    );

});

module.exports = routes;