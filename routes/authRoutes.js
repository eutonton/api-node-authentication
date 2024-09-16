const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const checkToken = require('../middlewares/checkToken');

router.post('/auth/register', authController.register);
router.post('/auth/login', authController.login);
router.get('/user/:id', checkToken, authController.getUser);

module.exports = router;
