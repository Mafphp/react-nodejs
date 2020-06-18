const CategoryRepository = require('../Repositories/categoryRepository');

class CategoryController {
    create() {}
    delete() {}
    update() {}
    async getAll(req, res) {
        const result = await CategoryRepository.getAll()
        res.json(result)
    }
}

module.exports = new CategoryController();