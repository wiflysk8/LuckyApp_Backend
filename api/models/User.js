const mongoose = require("mongoose");

const bcrypt = require("bcrypt");

const saltRounds = 10;

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
  name: { type: String, trim: true, required: true },
  mascotas: [{ type: mongoose.Types.ObjectId, ref: "mascotas" }],
  image: { type: String, trim: true, required: false, default: "https://pbs.twimg.com/profile_images/1420761289752678413/9p8US9wu_400x400.jpg" },
});

UserSchema.pre("save", function (next) {
  this.password = bcrypt.hashSync(this.password, saltRounds);
  next();
});

const User = mongoose.model("users", UserSchema);
module.exports = User;
