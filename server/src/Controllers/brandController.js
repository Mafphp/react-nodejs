const BrandRepository = require("../Repositories/brandRepository");

class VehicleController {
  async getAll(req, res) {
    const brands = await BrandRepository.getAll();
    res.json(brands);
  }
  async delete(req, res) {
    // category delete
    // brand deelte
    // user update
  }
  async getOne(req, res) {
    const brand = await BrandRepository.getBy({ id: req.params.id });
    res.json(brand);
  }
}

module.exports = new VehicleController();
