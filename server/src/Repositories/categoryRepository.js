const db = require('../../models/index');

class CategoryRepository {
    constructor() {
        this.category = db.category;
    }
    getAll() {
        return this.category.findAll();
    }
    getBy(params) {
        return this.category.findOne({where: {...params}});
    }
    create(params) {
        return this.category.create(params);
    }
    update(id, params) {
        return this.category.update({where: {id}}, {...params});
    }
    delete(id, params) {
        return this.category.destroy({where: {id}});
    }
}

module.exports = new CategoryRepository();