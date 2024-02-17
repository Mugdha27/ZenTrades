import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign({ id }, "gangamohit", {
    expiresIn: "30d",
  });
};

export default generateToken;
