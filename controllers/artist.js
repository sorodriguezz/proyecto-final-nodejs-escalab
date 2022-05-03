const Artist = require("../models/artist");
const slugify = require("slugify");

exports.createArtist = async (req, res) => {
  try {
    const { name, age, website } = req.body;
    const slug = slugify(req.body.name);

    const locateArtist = await Artist.findOne({ name });

    if (locateArtist) {
      return res.status(400).json({ message: "El artista ya existe" });
    }

    const newArtist = await new Artist({
      name,
      age,
      website,
      slug,
    }).save();

    return res.status(200).json(newArtist);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

exports.listArtists = async (_req, res) => {
  try {
    const artists = await Artist.find({ status: "active" });
    return res.status(200).json(artists);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
