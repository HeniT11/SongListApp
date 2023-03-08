const asyncMiddleware = require("../middleware/async");
const { Song } = require("../models/song");

const getTotalSongs = asyncMiddleware(async (req, res) => {
  const songCount = await Song.count();
  res.status(200).json({ count: songCount });
});

const getTotalArtists = asyncMiddleware(async (req, res) => {
  const artistCount = (await Song.distinct("artist")).length;
  res.status(200).json({ count: artistCount });
});

const getTotalGenres = asyncMiddleware(async (req, res) => {
  const genreCount = (await Song.distinct("genre")).length;
  res.status(200).json({ count: genreCount });
});

const getTotalAlbums = asyncMiddleware(async (req, res) => {
  const albumCount = (await Song.distinct("album")).length;
  res.status(200).json({ count: albumCount });
});

const getTotalSongsInGenres = asyncMiddleware(async (req, res) => {
  const genreSongCount = await Song.aggregate([
    { $group: { _id: "$genre", count: { $sum: 1 } } },
  ]);
  res.status(200).json(genreSongCount);
});

const getTotalArtistSongs = asyncMiddleware(async (req, res) => {
  const artistSongCount = await Song.aggregate([
    { $group: { _id: "$artist", count: { $sum: 1 } } },
  ]);
  res.status(200).json(artistSongCount);
});

const getTotalSongsInAlbums = asyncMiddleware(async (req, res) => {
  const albumSongCount = await Song.aggregate([
    { $group: { _id: "$album", count: { $sum: 1 } } },
  ]);
  res.status(200).json(albumSongCount);
});

module.exports = {
  getTotalSongs,
  getTotalArtists,
  getTotalGenres,
  getTotalAlbums,
  getTotalSongsInGenres,
  getTotalArtistSongs,
  getTotalSongsInAlbums,
};
