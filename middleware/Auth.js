// const jwt = require("jsonwebtoken");
// const User = require("../models/User");
// import User from './../models/User';
import jwt from 'jsonwebtoken';


export const authMiddleware = (req, res, next) => {

  const token =
    req.cookies.token ||
    req.header("Authorization").replace("Bearer ", "");

  if (!token) {
    return res.status(401).send({ error: "Access denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, "P@l@sh");
    req.user = decoded;

    next();
  } catch (error) {
    res.status(400).send({ error: "Invalid token." });
  }
};

export const adminMiddleware = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).send({ error: "Access denied." });
  }
  next();
};


