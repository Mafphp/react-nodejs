const VehicleRepository = require('../Repositories/vehicleRepository');

class VehicleController {
    async create({body, params}, res) {
        if (Object.values(body).some(x => !x)) {
            throw new Error('invalid data passed');
        }
        const result = await VehicleRepository.create(body)
        res.json()
    }
    delete() {}
    update() {}
    async getAll(req, res) {
        const result = await VehicleRepository.getAll()
        res.json(result)
    }
}

module.exports = new VehicleController();