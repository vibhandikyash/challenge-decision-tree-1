const express = require('express');
const router = express.Router();
const bidCapRoutes = require('./bidCap/route');


router.get('/', (req, res) => res.send('welcome server running'));

router.use('/bid-cap', bidCapRoutes);


module.exports = router;