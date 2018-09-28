const express = require('express');
const app = new express();


app.use("/", Routes);



app.listen(4001, () =>
    console.log("App is running")
)