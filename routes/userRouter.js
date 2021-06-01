const router = require("express").Router();
const userController = require("../controllers/userController.js");


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


module.exports = router;