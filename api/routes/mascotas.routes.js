const express = require("express");
const Mascotas = require("../models/mascotas");
const router = express.Router();

const { upload, uploadToCloudinary } = require("../middlewares/file.middleware");

router.get("/", async (req, res) => {
  try {
    const mascotas = await Mascotas.find();
    return res.status(200).json(mascotas);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.get("/:nombre", async (req, res) => {
  const { nombre } = req.params;

  try {
    const mascotaByName = await Mascotas.find({ nombre });
    return res.status(200).json(mascotaByName);
  } catch (err) {
    return res.status(500).json(err);
  }
});

router.post("/", [upload.single("imagen"), uploadToCloudinary], async (req, res, next) => {
  try {
    req.body.imagen = req.file_url;
    const newMascota = new Mascotas(req.body);
    const createdMascota = await newMascota.save();
    return res.status(201).json(createdMascota);
  } catch (error) {
    return next(error);
  }
});

/*
post de relaciones router.post('/create', async (req, res, next) => {
  try {
    const newSpot = new Spot({
      name: req.body.name,
      country: req.body.country,
      city: req.body.city,
      skaters: [],
    });
    const createdSpot = await newSpot.save();
    return res.status(201).json(createdSpot);
  } catch (error) {
    next(error);
  }
});

//Hacemos un put para relacionar los spots con los skaters o mascotas

router.put('/add-skater', async (req, res, next) => {
  try {
    const { spotId } = req.body;
    const { skaterId } = req.body;
    const updatedSpot = await Spot.findByIdAndUpdate(spotId, { $push: { skaters: skaterId } }, { new: true });
    return res.status(200).json(updatedSpot);
  } catch (error) {
    return next(error);
  }
}); */

module.exports = router;
