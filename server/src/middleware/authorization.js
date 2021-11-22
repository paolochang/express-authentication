require("dotenv").config();
import jwt from "jsonwebtoken";

const authorization = (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token) {
    console.log("TOKEN IS NOT FOUND");
    return res.sendStatus(403);
  }
  try {
    const data = jwt.verify(token, process.env.JWT_KEY);
    req.user = {
      _id: data._id,
      username: data.username,
    };
    return next();
  } catch (err) {
    return res.sendStatus(403);
  }
};

export default authorization;
