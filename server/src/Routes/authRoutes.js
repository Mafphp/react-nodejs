const router = require('express').Router();
const AuthController = require('../Controllers/authController');

router.post('/login', AuthController.login);
router.post('/logout', AuthController.logout);
router.post('/register', AuthController.register);
router.post('/refresh', AuthController.refreshToken);
router.post('/token', AuthController.verifyToken);

module.exports = router;

