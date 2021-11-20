import User from "../models/User";

export const register = async (req, res) => {
  let isPasswordMatch = true;
  let existUsername = false;
  try {
    const { username, password, confirmPassword, name } = req.body;

    if (password !== confirmPassword) {
      isPasswordMatch = false;
      let error = new Error("Passwords are not match.");
      error.status = 400;
      throw error;
    }

    existUsername = await User.findByUsername(username);

    if (existUsername) {
      let error = new Error("Username is already been used.");
      error.status = 409;
      throw error;
    }

    const user = new User({
      username,
      password,
      name,
    });

    await user.save();

    return res.status(200).json({ user: user.serialize() });
  } catch (err) {
    return res.status(err.status).json({ err: err.message });
  }
};

export const login = (req, res) => {
  res.send("Login");
};

export const check = (req, res) => {
  res.send("Check");
};

export const logout = (req, res) => {
  res.send("Logout");
};

export const read = (req, res) => {
  res.send("Read");
};

export const remove = (req, res) => {
  res.send("Remove");
};

export const update = (req, res) => {
  res.send("Update");
};
