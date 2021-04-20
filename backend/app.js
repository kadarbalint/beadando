const express = require('express');
const bodyParser = require("body-parser");
const mongoose = require ('mongoose');

const userRoutes = require("./routes/user");
const bikesRoutes = require("./routes/bikes");

const app = express();

mongoose.connect("mongodb+srv://balint:zQuqx0PBF0QEviz3@cluster0.5oiqr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
.then(() => {
  console.log('connected to db');
})
.catch(() =>{
  console.log('connection failed');
});
//zQuqx0PBF0QEviz3
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers","Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
  next();
});


app.use("/api/user", userRoutes);
app.use("/api/bikes", bikesRoutes);

module.exports = app;
