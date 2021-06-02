const router = require("express").Router();
const userController = require("../controllers/userController.js");
const jwt = require('jsonwebtoken');


// Return all users in the database

router.get('/', async (req, res) => {
    try {
        res.json(await userController.findAllUsers());
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

// Create a new user in the database

router.post('/', async (req, res) => {
    try {
        const user = req.body;
        res.json(await userController.createUser(user));
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

router.put('/', async (req, res) => {
    try {
        const data = req.body;
        res.json(await userController.modifyProfile(data));
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

//Login

router.post('/login', async (req, res)=> {
    try {

        const {email,password} = req.body;
        const jwt = await userController.logMe(email,password);
        const token = jwt.token;
        const user = jwt.user;
        res.json({token,user});
    }catch (err) {
        return res.status(500).json({
            message: err.message
        }); 
    } 
})


module.exports = router;