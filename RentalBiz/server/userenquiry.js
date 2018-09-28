const routes = require('express').Router();

routes.get('/', (req, res) => {
    res.send({ message: "this is fr all user enquiry" })
});
routes.get('/:userid', (req, res) => {
    res.send({ message: "this is fr all user enquiry for user " + req.params.userid });
});
routes.get('/:categoryid', (req, res) => {
    res.send({ message: "this is for all user enquiry for categoryid " + req.params.categoryid });
});
routes.get('/enquirydetails/:enquiryid', (req, res) => {
    res.send({ message: "this will give user enquiry details for enquiry " + req.params.enquiryid });
});
routes.post('/saveuserenquiry', (req, res) => {
    res.send({ message: "this will save user enquiry"});
});

module.exports = routes;