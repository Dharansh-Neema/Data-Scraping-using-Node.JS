const router = require("express").Router();

const { home, signup, login, logout } = require("../controllers/user");

router.route("/").get(home);
router.route("/user/signup").post(signup);
router.route("/user/login").post(login);
router.route("/user/logout").post(logout);

module.exports = router;
