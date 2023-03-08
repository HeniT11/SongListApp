const mongoose = require("mongoose");
const Joi = require("joi");

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    artist: {
      type: String,
      required: true,
    },
    album: {
      type: String,
      required: true,
    },
    genre: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Song = mongoose.model("Course", songSchema);

function validateSong(song) {
  console.log(song);
  const schema = Joi.object({
    title: Joi.string().min(3).required(),
    artist: Joi.string().min(3).required(),
    album: Joi.string().min(3).required(),
    genre: Joi.string().min(3).required(),
  });
  const result = schema.validate(song);
  return result;
}

module.exports = { Song, songSchema, validateSong };
