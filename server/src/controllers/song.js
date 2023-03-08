const asyncMiddleware = require("../middleware/async");
const { Song, validateSong } = require("../models/song");

const getAllSongs = asyncMiddleware(async (req, res) => {
  const songs = await Song.find(req.query);
  res.status(200).json(songs);
});
const createSong = asyncMiddleware(async (req, res) => {
  const { error } = validateSong(req?.body);
  if (error)
    return res
      .status(400)
      .json({ error: { message: error.details[0].message } });
  let song = new Song({
    title: req.body.title,
    artist: req.body.artist,
    album: req.body.album,
    genre: req.body.genre,
  });
  song = await song.save();
  res.status(201).json(song);
});
const getOneSong = asyncMiddleware(async (req, res) => {
  const song = await Song.findById(req.params.id);
  if (!song)
    return res
      .status(404)
      .json({ error: { message: "the song was not found" } });
  else res.status(200).json(song);
});
const updateSong = asyncMiddleware(async (req, res) => {
  const { error } = validateSong(req.body);
  if (error)
    return res
      .status(400)
      .json({ error: { message: error.details[0].message } });

  const song = await Song.findByIdAndUpdate(
    req.params.id,
    {
      title: req.body.title,
      artist: req.body.artist,
      album: req.body.album,
      genre: req.body.genre,
    },
    { new: true }
  );
  if (!song)
    return res
      .status(404)
      .json({ error: { message: "the song was not found" } });

  res.status(200).json(song);
});
const deleteSong = asyncMiddleware(async (req, res) => {
  const song = await Song.findByIdAndRemove(req.params.id);
  if (!song)
    return res
      .status(404)
      .json({ error: { message: "the song was not found" } });

  res.status(200).json(song);
});

module.exports = {
  getAllSongs,
  createSong,
  getOneSong,
  updateSong,
  deleteSong,
};
