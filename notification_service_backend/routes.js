const express = require("express");
const {getAll, markRead, addNotification} = require("./controller");

const router = express.Router();

router.get("/", getAll);
router.patch("/:id", markRead);
router.post("/", addNotification);

module.exports = router;