const Role = require("../models/role");
const slugify = require("slugify");

exports.createRole = async (req, res) => {
  try {
    const { name, role } = req.body;
    const slug = slugify(req.body.name);

    const locateName = await Role.findOne({ name });
    const locateRole = await Role.findOne({ role });

    if (typeof name !== "string") {
      return res.status(400).json({ message: "Datos invalidos" });
    } else {
      if (locateName || locateRole) {
        return res
          .status(400)
          .json({ message: "El rol o nombre ya están ocupados" });
      } else {
        const newRole = await new Role({ name, role, slug }).save();
        return res.status(200).json(newRole);
      }
    }
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

exports.listRoles = async (_req, res) => {
  try {
    const roles = await Role.find({ status: "active" });
    return res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

exports.searchRole = async (req, res) => {
  const role = await Role.findOne({
    slug: req.params.slug,
    status: "active",
  }).exec();

  if (!role) return res.status(404).json({ message: "Rol no encontrado" });

  return res.status(200).json(role);
};

exports.removeSoftRole = async (req, res) => {
  try {
    const { slug } = req.params;

    const deletedRole = await Role.findOneAndUpdate(
      { slug },
      { status: "inactive" },
      { new: true }
    );

    if (!deletedRole) {
      return res.status(404).json({ message: "Rol no encontrado" });
    } else {
      return res.status(200).json(deletedRole);
    }
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
};
