const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const mascotasSchema = new Schema(
  {
    imagen: { type: String, required: false },
    nombre: { type: String, required: false },
    sexo: { type: String, required: false },
    ciudad: { type: String, required: false },
    proceso: { type: String, required: false },
    especie: { type: String, required: false },
    fecha: { type: String, required: false },
    tamano: { type: String, required: false },
    peso: { type: Number, required: false },
    personality: [],
    historia: { type: String, required: false },
    vacunado: { type: String, required: false },
    desparasitado: { type: String, required: false },
    sano: { type: String, required: false },
    esterilizado: { type: String, required: false },
    identificado: { type: String, required: false },
    microchip: { type: String, required: false },
    requisitos: { type: String, required: false },
    tasa: { type: Number, required: false },
    envio: { type: String, required: false },
  },
  {
    timestamps: true,
  }
);

const Mascotas = mongoose.model("mascotas", mascotasSchema);
module.exports = Mascotas;
