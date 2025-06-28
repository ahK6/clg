const router = require("express").Router();
const reservationsController = require("../controller/reservations.controller");
const jwtValidator = require("../../global/middlewares/jwt_validator");

router.post(
  "/book-experience",
  jwtValidator.verifyToken,
  reservationsController.makeReservation
);

module.exports = router;
