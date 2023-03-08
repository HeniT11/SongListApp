const express = require("express");
const {
  getTotalSongs,
  getTotalArtists,
  getTotalGenres,
  getTotalAlbums,
  getTotalSongsInGenres,
  getTotalArtistSongs,
  getTotalSongsInAlbums,
} = require("../controllers/stats");

const router = express.Router();

router.get("/songs/total", getTotalSongs);
router.get("/artists/total", getTotalArtists);
router.get("/artists/songs/total", getTotalArtistSongs);
router.get("/genres/total", getTotalGenres);
router.get("/genres/songs/total", getTotalSongsInGenres);
router.get("/albums/total", getTotalAlbums);
router.get("/albums/songs/total", getTotalSongsInAlbums);

module.exports = router;
