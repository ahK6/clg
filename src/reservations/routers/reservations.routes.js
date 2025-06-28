const router = require("express").Router();
const reservationsController = require("../controller/reservations.controller");
const jwtValidator = require("../../global/middlewares/jwt_validator");
const {
  reservationsValidation,
} = require("../validators/reservations.validators");

router.post(
  "/book-experience",
  jwtValidator.verifyToken,
  reservationsValidation,
  reservationsController.makeReservation
);

module.exports = router;
