const router = require("express").Router();
const experienciesController = require("../controllers/experiencies.controller");
const {
  experiencesValidation,
} = require("../validators/experiencies.validators");

const jwtValidator = require("../../global/middlewares/jwt_validator");

router.post(
  "/create-experience",
  jwtValidator.verifyToken,
  experiencesValidation,
  experienciesController.createExperiencie
);

module.exports = router;
