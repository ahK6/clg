const router = require("express").Router();
const experienciesController = require("../controllers/experiencies.controller");

const jwtValidator = require("../../global/middlewares/jwt_validator");

router.post(
  "/create-experience",
  jwtValidator.verifyToken,
  experienciesController.createExperiencie
);

module.exports = router;
