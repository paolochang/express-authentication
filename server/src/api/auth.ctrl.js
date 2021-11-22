import User from "../models/User";

/**
 *  POST /api/auth/register
 *
 *  {
 *    "username": "kildong",
 *    "password": "password",
 *    "confirmPassword": "password",
 *    "name": "홍길동"
 *  }
 */
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
      name,
    });

    await user.setPassword(password);
    await user.save();

    const token = user.generateToken();

    return res.status(200).json({ user: user.serialize(), token });
  } catch (err) {
    return res.status(err.status).json({ err: err.message });
  }
};

/**
 *  POST /api/auth/login
 *
 *  {
 *    "username": "kildong",
 *    "password": "password"
 *  }
 */
export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      let error = new Error("Username and password are required.");
      error.status = 401; // Unauthorized
      throw error;
    }

    const user = await User.findByUsername(username);

    if (!user) {
      let error = new Error("Username does not exist.");
      error.status = 401; // Unauthorized
      throw error;
    }

    const isValid = await user.checkPassword(password);

    if (!isValid) {
      let error = new Error("Password does not match.");
      error.status = 401; // Unauthorized
      throw error;
    }

    const token = user.generateToken();
    res.cookie("auth_token", token, {
      // maxAge: 300, // 5min, 1000*60*60*24*7 // 7 days
      httpOnly: true,
    });

    return res.status(200).json({ user: user.serialize(), token });
  } catch (err) {
    return res.status(err.status).json({ err: err.message });
  }
};

export const check = (req, res) => {
  console.log("REQ.USER:", req.user);
  res.send("Protected GET check");
};

/**
 *  POST /api/auth/logout
 */
export const logout = (req, res) => {
  res.clearCookie("auth_token");
  return res.status(200).json({ message: "Logout successful" });
};

export const read = (req, res) => {
  res.send("Read");
};

export const remove = async (req, res) => {
  /** URL: /api/auth/:id is undefined */
  console.log("REQ.PARAMS.ID:", req.params.id);
  try {
    await User.findByIdAndDelete(req.user._id);
    res.clearCookie("auth_token");
    return res.status(200).json({ message: "Account deleted." });
  } catch (err) {
    return res.status(404).json({ error: err.message }); // 404: NOT FOUNT
  }
};

export const update = (req, res) => {
  res.send("Update");
};
