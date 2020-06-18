const router = require('express').Router();
const BrandController = require('../Controllers/brandController');

router.get('/', BrandController.getAll);

module.exports = router;

