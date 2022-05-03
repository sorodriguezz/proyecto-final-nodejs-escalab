const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    yearPublication: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
    },
    amountSongs: {
      type: Number,
    },
    artist: [
      {
        ref: "Artist",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    slug: {
      type: String,
      lowercase: true,
      unique: true,
      index: true,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = mongoose.model("Artist", artistSchema);
