const router = require('express').Router();
const ModelController = require('../Controllers/modelController');

router.get('/', ModelController.getAll);

module.exports = router;

