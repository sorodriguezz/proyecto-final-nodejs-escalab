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

exports.remove = async (req, res) => {
  try {
    const deleted = await Song.findOneAndRemove({ slug: req.params.slug });
    res.json(deleted);
  } catch (err) {
    res.status(400).send("Song delete failed");
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

exports.songsCount = async (_req, res) => {
  let total = await Song.find({ status: "Active" }).estimatedDocumentCount().exec();
  res.json({total});
};

exports.listPaginator = async (req, res) => {
  try {
    const { sort, order, page } = req.body;
    const currentPage = page || 1;
    const perPage = 3;

    const products = await Song.find({ status: "Active" })
    .skip((currentPage - 1) * perPage)
    .sort([[sort, order]])
    .limit(perPage)
    .exec();
    
    res.json({
      sort,
      order,
      perPage,
      currentPage,
      products
    });

  } catch (err) {
    res.status(400).send("Song list failed");
  }
};

exports.listAll = async (_req, res) => {
  res.json(await Song.find({ status: "Active" }).exec());
};

exports.listByCount = async (req, res) => {
  let products = await Song.find({ status: "Active" })
    .limit(parseInt(req.params.count))
    .sort([["createdAt", "desc"]])
    .exec();
  res.json(products);
};