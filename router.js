const router = require('express').Router();
const userRouter = require('./routes/userRouter.js');
const chatRouter = require('./routes/chatRouter.js');

router.use('/user', userRouter);
router.use('/chat', chatRouter);

module.exports = router;