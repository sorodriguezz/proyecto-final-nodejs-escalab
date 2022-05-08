const Album = require("../models/album");
const Artist = require("../models/artist");

const slugify = require("slugify");

exports.createAlbum = async (req, res) => {
  try {
    const { name, yearPublication, duration, amountSong, artists } = req.body;
    const slug = slugify(name);

    const newAlbum = new Album(
      {
        name,
        yearPublication,
        duration,
        amountSong,
        artists,
        slug
      }
    );

    newAlbum.artists = await Artist.find({ name: artists });

    if (newAlbum.artists.length === 0) {
      return res.status(400).json({ message: "No existe el/los artista(s)" });
    }

    await newAlbum.save();

    res.status(200).json({message: "Album creado correctamente", newAlbum,});

  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.listAlbum = async (_req, res) => {
  try {
    const albums = await Album.find({ status: "active" });
    return res.status(200).json(albums);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
}