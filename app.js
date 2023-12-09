const express = require("express");

const https=require("https");

const   bodyParser=require("body-parser");
const { log } = require("console");
app.use(bodyParser.urlencoded({extended:true}));


const app = express();

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});