const router = require('express').Router();

const genericController = require("../../controller/genericController");

// Matches with "/api/generic"
router.route("/")
  .get(genericController.genericTest)

module.exports = router;
