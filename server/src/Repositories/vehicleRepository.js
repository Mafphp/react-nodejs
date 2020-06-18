const db = require('../../models/index');

class VehicleRepository {
    constructor() {
        this.vehicle = db.vehicle;
    }
    getAll() {
        return this.vehicle.findAll();
    }
    getBy(params) {
        return this.vehicle.findOne({where: {...params}});
    }
    create(params) {
        console.log({params});
        return this.vehicle.create({...params});
    }
    update(id, params) {
        return this.vehicle.update({where: {id}}, {...params});
    }
    delete(id, params) {
        return this.vehicle.destroy({where: {id}});
    }
}

module.exports = new VehicleRepository();