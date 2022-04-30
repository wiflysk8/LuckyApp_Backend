const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const user = await User.find().populate("mascotas");
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const userById = await  (await User.find({ id }).populate("mascotas"));
    return res.status(200).json(userById);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/register", async (req, res, next) => {
  console.log(req.body);
  try {
    const newUser = new User({
      email: req.body.email,
      password: req.body.password,
      name: req.body.name,
    });

    const createdUser = newUser.save();
    return res.status(201).json(createdUser);
  } catch (error) {
    next(error);
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const userInfo = await User.findOne({ email: req.body.email });
    if (bcrypt.compareSync(req.body.password, userInfo.password)) {
      userInfo.password = null;
      const token = jwt.sign(
        {
          id: userInfo._id,
          email: userInfo.email,
        },
        req.app.get("secretKey"),
        { expiresIn: "1h" }
      );
      return res.json({
        status: 200,
        message: "User created",
        data: { user: userInfo, token: token },
      });
    }
  } catch (error) {
    return next(error);
  }
});

router.post("/logout", (req, res, next) => {
  try {
    req.headers.authorization = null;
    return res.json({
      status: 200,
      message: "Logout OK",
      token: null,
    });
  } catch (error) {
    return next(error);
  }
});

router.put("/add-mascotas", async (req, res, next) => {
  try {
    const { userId } = req.body;
    const { mascotaId } = req.body;
    const updatedUser = await User.findByIdAndUpdate(userId, { $push: { mascotas: mascotaId } }, { new: true });
    return res.status(200).json(updatedUser);
  } catch (error) {
    return next(error);
  }
});

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params; //Recuperamos el id de la url
    const userModify = new User(req.body); //instanciamos un nuevo user con la información del body
    userModify._id = id; //añadimos la propiedad _id al personaje creado
    const userUpdated = await User.findByIdAndUpdate(id, userModify, { new: true });
    return res.status(200).json(userUpdated); //Este spot que devolvemos es el anterior a su modificación
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
