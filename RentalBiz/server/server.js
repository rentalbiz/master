const express = require('express');
const app = new express();
const routes = require('./routes');

app.use("/", routes);



app.listen(4001, () =>
    console.log("App is running")
)