const Routes = require('express').Router();

const mongoose = require('mongoose');
const category = require('./models/categorymodel');


Routes.get("/", (req, res) => {
    category.find({"type":"P"}).exec().then(result=>{
        res.status(200).json(result);
    })
   // res.status(200).json({ message: 'Connected!' });
});

Routes.get("/subcategory/:categoryid", (req, res) => {
    category.find({"type":"C","parentcategoryid":req.params.categoryid}).exec().then(result=>{
        res.status(200).json(result);
    })
});
Routes.post("/savecategory", (req, res) => {
  
    const categorymodel = new category({
        categoryid: req.body.categoryid,
        name: req.body.name,
        description: req.body.description,
        parentcategoryid:req.body.parentcategoryid,
        type: req.body.type
    });
    categorymodel.save().then(result => {
        console.log(result);
        res.status(200).json({ message:"saved successfully",category: categorymodel});
    }, err => {
        console.log(err);
        res.status(500).json({ message:err});
    });
   
});

module.exports = Routes;