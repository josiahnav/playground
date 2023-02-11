const express = require('express');
const router = express.Router();

const homeController = require('../controllers/home');

router.post('/api/add', homeController.post);

router.delete('/api/remove', homeController.delete);

router.put('/api/edit', homeController.put);

module.exports = router;