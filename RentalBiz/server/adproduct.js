const routes = require('express').Router();
const mongoose = require('mongoose');
const AdProduct = require('./models/adproductmodel');

routes.get('/', (req, res) => {
    AdProduct.find({}).exec().then(result => {
        res.status(200).json(result);
    }, err => {
        res.status(500).json(err);
    });
});
routes.get('/adproductbycategory/:categoryid', (req, res) => {
    AdProduct.find({ categoryid: req.params.categoryid }).exec().then(result => {
        res.status(200).json(result);
    }, err => {
        res.status(500).json(err);
    });
});
routes.get('/adproductbyuser/:userid', (req, res) => {
    AdProduct.find({ categoryid: req.params.userid }).exec().then(result => {
        res.status(200).json(result);
    }, err => {
        res.status(500).json(err);
    });
});
routes.get('/productdetails/:productid', (req, res) => {
    AdProduct.find({ _id: req.params.productid }).exec().then(result => {
        res.status(200).json(result);
    }, err => {
        res.status(500).json(err);
    });
});
routes.get('/productimages/:productid', (req, res) => {
    AdProduct.find({ _id: req.params.productid }).exec().then(result => {
        res.status(200).json(result);
    }, err => {
        res.status(500).json(err);
    });
});
routes.get('/activeadproduct', (req, res) => {
    AdProduct.find({ isactive: true }).exec().then(result => {
        res.status(200).json(result);
    }, err => {
        res.status(500).json(err);
    });
});
routes.get('/rentadproducts', (req, res) => {
    AdProduct.find({ isrent: true }).exec().then(result => {
        res.status(200).json(result);
    }, err => {
        res.status(500).json(err);
    });
});
routes.get('/buyadproducts', (req, res) => {
    AdProduct.find({ isbuy: true }).exec().then(result => {
        res.status(200).json(result);
    }, err => {
        res.status(500).json(err);
    });
});
routes.post('/saveadproduct', (req, res) => {
    const adproductmodel = new AdProduct({
        name: req.body.name,
        description: req.body.description,
        isrent: req.body.isrent,
        isbuy: req.body.isbuy,
        categoryid: req.body.categoryid,
        locationlong: req.body.locationlong,
        locationlat: req.body.locationlat,
        price: req.body.price,
        isnegotiable: req.body.isnegotiable,
        isdailybasis: req.body.isdailybasis,
        ismonthlybasis: req.body.ismonthlybasis,
        isfixedbasis: req.body.isfixedbasis,
        isshowcontact: req.body.isshowcontact,
        userid: req.body.userid,
        active: true
    });
    adproductmodel.save().then(result => {
        res.status(200).json({ message: "Product saved successfully", model: adproductmodel });
    }, err => {
        res.status(500).json(err);
    })
    res.send({ message: "it will save adproduct" });
});

module.exports = routes;