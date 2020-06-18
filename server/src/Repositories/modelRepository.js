const db = require('../../models/index');

class ModelRepository {
    constructor() {
        this.model = db.model;
    }
    getAll() {
        return this.model.findAll();
    }
    getBy(params) {
        return this.model.findOne({where: {...params}});
    }
    create(params) {
        return this.model.create(params);
    }
    update(id, params) {
        return this.model.update({where: {id}}, {...params});
    }
    delete(id, params) {
        return this.model.destroy({where: {id}});
    }
}

module.exports = new ModelRepository();