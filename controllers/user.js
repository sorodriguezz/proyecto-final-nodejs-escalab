const User = require("../models/user");
const slugify = require("slugify");

exports.create = async (req, res) => {
  try {
    req.body.slug = slugify(req.body.name);
    const newUser = await new User(req.body).save();
    res.json(newUser);
  } catch (err) {
    res.status(400).json({
      err: err.message,
      code: err.code,
    });
  }
};

exports.list = async (req, res) => {
  res.json(await User.find({status: "Active"}).exec());
};

exports.update = async (req, res) => {
  const { name, status } = req.body;
  try {
    const updated = await User.findOneAndUpdate(
      { slug: req.params.slug },
      { name, slug: slugify(name), status },
      { new: true }
    ).exec();
    res.json(updated);
  } catch (err) {
    res.status(400).send("User update failed");
  }
};

exports.read = async (req, res) => {
  let user = await User.findOne({
    slug: req.params.slug,
    status: "Active",
  }).exec();
  res.json(user);
};

exports.removeSoft = async (req, res) => {
  try {
    const deleted = await User.findOneAndUpdate(
      { slug: req.params.slug },
      { status: "Inactive" },
      { new: true }
    );
    res.json(deleted);
  } catch (err) {
    res.status(400).send("User delete failed");
  }
};