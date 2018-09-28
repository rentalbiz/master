const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.send({ message: "get ad product enquiry list" });
});
routes.get('/adproductenquirybyuserid/:userid', (req, res) => {
    res.send({ message: "get ad product enquiry list for user " + req.params.userid });
});
routes.get('/adproductenquirydetails/:adproductenquiryid', (req, res) => {
    res.send({ message: "get ad product enquiry details for user " + req.params.adproductenquiryid });
});
routes.post('/saveadproductenquiry', (req, res) => {
    res.send({ message: "save ad product enquiry details"});
});
routes.post('/acceptadproductenquiry', (req, res) => {
    res.send({ message: "accept ad product enquiry"});
});

module.exports = routes;