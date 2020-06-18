const router = require('express').Router();
const CategoryController = require('../Controllers/categoryController');

router.get('/', CategoryController.getAll);

module.exports = router;

