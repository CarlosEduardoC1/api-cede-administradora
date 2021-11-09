const express = require('express');
const router = express.Router();
const controller = require('../controller');

router.post('/send-mail', controller.send);

module.exports = router;
