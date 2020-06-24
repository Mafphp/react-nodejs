const BrandRepository = require('../Repositories/brandRepository');

class BrandController {
    
    async getAll(req, res) {
        const brands = await BrandRepository.getAll();
        res.json(brands);
    }
}

module.exports = new BrandController();