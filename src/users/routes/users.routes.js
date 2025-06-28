const router = require("express").Router();
const userController = require("../controllers/users.controller");

router.post("/sign-up", userController.signUp);
router.post("/login", userController.login);

module.exports = router;
