const {db, sequelize, Op} = require('../../models/index');

class AggregateRepository {
    constructor() {
        this.db = db;
    }
    async getAllVehicles(args) {
        const result = await this.db.vehicle.findAll({
            where: {
                [Op.and]: [
                    args.categoryIds ? {
                    category_id: {
                        [Op.in]: args.categoryIds
                    }
                } : {},
                args.brandIds ? {
                    brand_id: {
                        [Op.in]: args.brandIds
                    }
                }: {}]
            },
            logging: console.log,
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