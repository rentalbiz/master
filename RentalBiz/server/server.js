const express = require('express');
const bodyParser = require("body-parser");
const app = new express();
const routes = require('./routes');

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://rental_biz:pass123@rentalbizcluster-zxiaa.mongodb.net/RentalBiz?retryWrites=true',
    {
        useNewUrlParser: true 
    });

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
    app.use((req, res, next) => {
      res.header("Access-Control-Allow-Origin", "*");
      res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
      );
      if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
      }
      next();
    });
app.use("/", routes);



app.listen(4001, () =>
    console.log("App is running")
)