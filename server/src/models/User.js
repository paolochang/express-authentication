require("dotenv").config();
import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const UserSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: String,
});

UserSchema.statics.findByUsername = function (username) {
  return this.findOne({ username });
};

UserSchema.methods.setPassword = async function (password) {
  const hash = await bcrypt.hash(password, 10);
  this.password = hash;
};

UserSchema.methods.checkPassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

UserSchema.methods.serialize = function () {
  const data = this.toJSON();
  delete data.password;
  return data;
};

UserSchema.methods.generateToken = function () {
  const token = jwt.sign(
    { _id: this._id, username: this.username },
    process.env.JWT_KEY,
    { expiresIn: "7d" }
  );
  return token;
};

const User = mongoose.model("User", UserSchema);

export default User;
