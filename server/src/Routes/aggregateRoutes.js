const router = require('express').Router();
const AggregateController = require('../Controllers/aggregateController');

router.post('/', AggregateController.query);

module.exports = router;

