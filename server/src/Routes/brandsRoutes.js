const router = require("express").Router();
const BrandController = require("../Controllers/brandController");

router.get("/", BrandController.getAll);
router.get("/:id", BrandController.getOne);

module.exports = router;
