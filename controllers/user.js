const User = require("../models/user");
const Role = require("../models/role");

const slugify = require("slugify");

exports.createUser = async (req, res) => {
  try {
    const { username, email, password, roles } = req.body;
    const slug = slugify(req.body.username);

    const existUsername = await User.findOne({ username });
    const existEmail = await User.findOne({ email });

    if (existEmail || existUsername) {
      return res
        .status(400)
        .json({ message: "Usuario o correo ya existen" });
    }

    const newUser = new User({
      username,
      slug,
      email,
      password,
      roles,
    });

    newUser.password = await User.encryptPassword(password);
    newUser.roles = await Role.find({ name: roles });

    if (newUser.roles.length === 0) {
      newUser.roles = await Role.find({ name: "user" });
    }

    await newUser.save();
    res.status(200).json({
      message: "Usuario creado correctamente",
      data: {
        username,
        email,
      },
    });
  } catch (error) {
    res.status(500).json({ error });
  }
};

exports.listUsers = async (_req, res) => {
  try {
    const users = await User.find({ status: "active" });
    return res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error });
  }
};
