const mongoose = require("mongoose");

const artistSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    website: {
      type: String,
    },
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

module.exports = mongoose.model("Artist", artistSchema);
