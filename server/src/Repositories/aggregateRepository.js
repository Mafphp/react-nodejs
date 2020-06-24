const {db, sequelize} = require('../../models/index');

class AggregateRepository {
    constructor() {
        this.db = db;
    }
    async getAllVehicles() {
        // const result = await sequelize().query(`SELECT * from brands`)
        const result = await this.db.vehicle.findAll({
            where: {},
            include: [{
                model: this.db.brand,
            }, {
                model: this.db.model,
            }, {
                model: this.db.category,
            }]
        });
        if (result) {
            return result.map(r => r.get({plain: true}));
        }
        return [];
    }
}
module.exports = new AggregateRepository();