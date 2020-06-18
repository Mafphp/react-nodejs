const router = require('express').Router();
const VehicleController = require('../Controllers/vehicleController');

router.get('/', VehicleController.getAll);
router.post('/create', VehicleController.create);
router.delete('/delete/:id', VehicleController.delete);
router.put('/update/:id', VehicleController.update);

module.exports = router;

