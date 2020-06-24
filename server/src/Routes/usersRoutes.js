const router = require('express').Router();
const UserController = require('../Controllers/userController');

router.get('/', UserController.getAll);
router.post('/create', UserController.create);
router.post('/promote', UserController.promote);
router.put('/update', UserController.update);
router.delete('/delete', UserController.delete);

module.exports = router;

