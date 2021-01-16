const express = require('express');
const router = express.Router();
const apiController = require('../controllers/api');

router.get('/', apiController.getHome);
router.post('/average', apiController.postAverage);
router.post('/unique', apiController.postUnique);
router.post('/slots', apiController.postSlots);

module.exports = router;