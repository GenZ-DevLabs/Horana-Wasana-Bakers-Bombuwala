const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const bycrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Admin = require("./models/Admin");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const mutler = require("multer");
const fs = require("fs");

require("dotenv").config();
const app = express();

const bycrptSalt = bycrypt.genSaltSync(10);
const jwtSecret = "adawe123e29acacsc3w1e341vndni4";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("Hello World");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const adminDoc = await Admin.findOne({ email });

  if (adminDoc) {
    const passOk = adminDoc.password == password;
    if (passOk) {
      jwt.sign(
        { email: adminDoc.email, id: adminDoc._id, name: adminDoc.name },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(adminDoc);
        }
      );
    } else {
      res.status(422).json("Password not Ok");
    }
  } else {
    res.json("not found");
  }
});

app.listen(4001);
