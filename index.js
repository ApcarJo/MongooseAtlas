const express = require('express');
const router = require('./router.js')
const db = require('./config/mongoose');
const app = express();
const port = 3000;
const cors = require('cors');

//Middlewares
app.use(express.json());
app.use(cors());
app.use(router);

db.then(()=>{
    //Starting server
        app.listen(port, ()=> console.log(`Node server running on http://localhost:${port}`));
    })
    .catch((err)=> console.log(err.message));