const db = require("../../models/index");

class BrandRepository {
  constructor() {
    this.brand = db.brand;
  }
  getAll() {
    return this.brand.findAll();
  }

  getBy(params) {
    return this.brand.findOne({ where: { ...params } });
  }
}

module.exports = new BrandRepository();
