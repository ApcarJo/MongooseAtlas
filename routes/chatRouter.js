const router = require("express").Router();
const chatController = require("../controllers/chatController.js");


// Return all users in the database

router.get('/', async (req, res) => {
    try {
        res.json(await chatController.findAllRooms());
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

// Create a new user in the database

router.post('/', async (req, res) => {
    try {
        const room = req.body;
        res.json(await chatController.createRoom(room));
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

router.post('/join', async (req,res) => {
    try{
        const data = req.body;
        res.json(await chatController.joinRoom(data));
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

router.post('/leave', async (req,res) => {
    try{
        const data = req.body;
        res.json(await chatController.leaveRoom(data));
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

router.post('/addmessage', async (req,res) => {
    try{
        const data = req.body;
        res.json(await chatController.addMessage(data));
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

router.delete('/', async (req,res) => {
    try{
        const id = req.body.id;
        res.json(await chatController.deleteRoom(id));
    }catch (err) {
        return res.status(500).json({
        message: err.message
        });
    }
});

module.exports = router;