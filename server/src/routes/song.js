const express = require("express");
const validateObjectId = require("../middleware/validateId");
const {
  getAllSongs,
  getOneSong,
  createSong,
  updateSong,
  deleteSong,
} = require("../controllers/song");

const router = express.Router();

router.get("/", getAllSongs);
router.post("/", createSong);
router.get("/:id", validateObjectId, getOneSong);
router.patch("/:id", validateObjectId, updateSong);
router.delete("/:id", validateObjectId, deleteSong);

module.exports = router;
