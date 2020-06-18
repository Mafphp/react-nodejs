const ModelRepository = require('../Repositories/modelRepository');

class ModelController {
    create() {}
    delete() {}
    update() {}
    async getAll(req, res) {
        const result = await ModelRepository.getAll()
        res.json(result)
    }
}

module.exports = new ModelController();