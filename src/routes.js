const express = require('express');

const orderRoute = require('./routes/orders');
// const userRoute = require('./routes/users');
// const authRoute = require('./routes/auth');

const router = express.Router();

router.use('/orders', orderRoute);
// router.use('/users', userRoute);
// router.use('/auth', authRoute);

module.exports = router;
