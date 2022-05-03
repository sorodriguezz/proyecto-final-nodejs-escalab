const Album = require("../models/album");
const Artist = require("../models/artist");

const slugify = require("slugify");

exports.createAlbum = async (req, res) => {
  try {
    const { name, yearPublication, duration, amountSong, artists } = req.body;
    const slug = slugify(name);

    const newAlbum = new Album({
      name,
      yearPublication,
      duration,
      amountSong,
      artists,
      slug
    });

    newAlbum.artists = await Artist.find({ name: artists });

    await newAlbum.save();

    res.status(200).json(
        {
          message: "Album creado correctamente",
          newAlbum,
        }
    );
  } catch (error) {
    res.status(500).json({ error });
  }
};
