const Song = require("../models/song");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.name);
    const newSong = await new Song(req.body).save();
    res.json(newSong);
  } catch (err) {
    res.status(400).json({
      err: err.message,
      code: err.code,
    });
  }
};

exports.listAll = async (req, res) => {
  res.json(await Song.find({ status: "Active" }).exec());
};

exports.read = async (req, res) => {
  let song = await Song.findOne({
    slug: req.params.slug,
    status: "Active",
  }).exec();
  res.json(song);
};

exports.update = async (req, res) => {
  const { author, duration, category } = req.body;

  try {
    const updated = await Song.findOneAndUpdate(
      { slug: req.params.slug },
      { author, duration, category },
      { new: true }
    ).exec();

    res.json(updated);
  } catch (err) {
    res.status(400).send(err.message);
  }
};

exports.removeSoft = async (req, res) => {
  try {
    const deleted = await Song.findOneAndUpdate(
      { slug: req.params.slug },
      { status: "Inactive" },
      { new: true }
    );
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Song delete failed");
  }
};
