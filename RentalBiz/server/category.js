const Routes = require('express').Router();


Routes.get("/", (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

Routes.get("/subcategory/:categoryid",(req,res)=>{
    res.status(200).json({ message: req.params });
});

module.exports = Routes;