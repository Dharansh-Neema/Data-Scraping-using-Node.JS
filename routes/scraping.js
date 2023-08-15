const router = require("express").Router();

const { scrapping } = require("../controllers/webScrapping");
const isLoggedIn = require("../middleware/isLoggedIn");
//isLoggedIn is middleware that check if the user is logged in or not
router.route("/scrap").post(isLoggedIn, scrapping);
module.exports = router;
