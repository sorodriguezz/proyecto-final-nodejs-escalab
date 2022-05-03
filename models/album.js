const mongoose = require("mongoose");

const albumSchema = new mongoose.Schema(
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
    artists: [
      {
        ref: "Artist",
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    status: {
      type: String,
      default: "active",
      enum: ["active", "inactive"],
    },
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

module.exports = mongoose.model("Album", albumSchema);
