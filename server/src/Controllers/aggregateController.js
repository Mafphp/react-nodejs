const AggregateRepository = require('../Repositories/aggregateRepository');

class AggregateController {
    constructor() {}
    
    async query(req, res) {
       try {
            const {method, payload} = req.body;
            if (!method) {
                throw new Error('method is not defined');
            }
            if (!AggregateController[method]) {
                throw new Error('method is not defined on aggregate controller')
            }
            const result = await AggregateController[method](payload);
            res.json(result);
        } catch (err) {
            res.status(402).send(err.message);
        }    
    }
    static async getAllVehiclesWithDetails(payload) {
        const result = await AggregateRepository.getAllVehicles(payload);
        return result;

    }
}

module.exports = new AggregateController();