const VehicleRepository = require("../Repositories/vehicleRepository");

class VehicleController {
  async create({ body, params }, res) {
    if (Object.values(body).some((x) => !x)) {
      throw new Error("invalid data passed");
    }
    const result = await VehicleRepository.create(body);
    res.json();
  }
  delete() {}
  update() {}
  async getAll(req, res) {
    // console.log(req.body);
    const result = await VehicleRepository.getAll();
    res.json(result);
  }
  async getOne(req, res) {
    console.log(req.body);
    console.log(req.params);
    // const result = await VehicleRepository.getBy({ id: req.params.id });
    res.send();
  }
}

module.exports = new VehicleController();
