const mongoose = require('mongoose');
const QUERY_STRING = "mongodb+srv://Apcarjo:ictjlac@cluster0.mb4u3.mongodb.net/testFSD?retryWrites=true&w=majority";

// Conntection to DB
const db = mongoose.connect(QUERY_STRING,
    {useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then(console.log("Connected to DataBase"))
    .catch((error) => console.log(error));

module.exports = db;