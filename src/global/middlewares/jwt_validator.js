const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({ message: "No hay token" });
  }

  const token = authHeader.split(" ")?.[1] ?? "";

  jwt.verify(token, "test", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Token invalido" });
    }
    req.user = decoded;
    next();
  });
};
