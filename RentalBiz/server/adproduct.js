const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.send({ message: "get product list" });
});
routes.get('/adproductbycategory/:categoryid', (req, res) => {
    res.send({ message: "get product list by " + req.params.categoryid });
});
routes.get('/productdetails/:productid', (req, res) => {
    res.send({ message: 'product details for ' + req.params.productid });
});
routes.get('/productimages/:productid', (req, res) => {
    res.send({ message: 'product images for ' + req.params.productid });
});
routes.get('/activeadproduct', (req, res) => {
    res.send({ message: "it show all open ad list" });
});
routes.get('/rentadproducts',(req,res)=>{
    res.send({ message: "it show all Rent ad list" });
});
routes.get('/buyadproducts',(req,res)=>{
    res.send({ message: "it show all buy ad list" });
});
routes.post('/saveadproduct',(req,res)=>{
    res.send({ message: "it will save adproduct" });
});

module.exports = routes;