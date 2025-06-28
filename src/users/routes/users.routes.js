const router = require("express").Router();
const userController = require("../controllers/users.controller");
const {
  signupValidation,
  loginValidation,
} = require("../validators/users.validators");

router.post("/sign-up", signupValidation, userController.signUp);
router.post("/login", loginValidation, userController.login);

module.exports = router;
