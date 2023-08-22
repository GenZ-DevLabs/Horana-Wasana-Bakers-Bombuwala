const express = require("express");
var cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("./models/User");
const Slide = require("./models/Slide");
const DesignBoard = require("./models/DesignBoard");
const Design = require("./models/Design");
const cookieParser = require("cookie-parser");
const imageDownloader = require("image-downloader");
const multer = require("multer");
const fs = require("fs");
const { type } = require("os");
const path = require('path');

require("dotenv").config();
const app = express();

const jwtSecret = "adawe123e29acacsc3w1e341vndni4";

app.use(express.static('static'));
app.use(express.json());
app.use(cookieParser());
app.use("/uploads", express.static(__dirname + "/uploads"));
app.use(
  cors({
    credentials: true,
    origin: "https://bombuwala-wasana.onrender.com",
    // origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

console.log(process.env.MONGO_URL);
mongoose.connect(process.env.MONGO_URL);

app.get("/test", (req, res) => {
  res.json("Hello World");
});

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const userDoc = await User.findOne({ email });

  if (userDoc) {
    const passOk = bcrypt.compareSync(userDoc.password, password);
    console.log(passOk);
    if (passOk) {
      jwt.sign(
        { email: userDoc.email, id: userDoc._id, name: userDoc.name },
        jwtSecret,
        {},
        (err, token) => {
          if (err) throw err;
          res.cookie("token", token).json(userDoc);
        }
      );
    } else {
      res.status(422).json("Password not Ok");
    }
  } else {
    res.status(422).json("not found");
  }
});

app.post("/logout", (req, res) => {
  res.cookie("token", "").json(true);
});

app.post("/upload-by-link", async (req, res) => {
  const { link } = req.body;

  const newName = "photo" + Date.now() + ".jpg";
  await imageDownloader.image({
    url: link,
    dest: __dirname + "/uploads/" + newName,
  });

  res.json(newName);
});

const photosMiddleware = multer({ dest: "uploads" });
app.post("/upload", photosMiddleware.array("photos", 100), (req, res) => {
  const uploadedFiles = [];
  for (let i = 0; i < req.files.length; i++) {
    const { path, originalname } = req.files[i];
    const parts = originalname.split(".");
    const ext = parts[parts.length - 1];
    const newPath = path + "." + ext;

    fs.renameSync(path, newPath);
    uploadedFiles.push(newPath.replace("uploads\\", ""));
  }

  res.json(uploadedFiles);
});

// add new slide
app.post("/slides", (req, res) => {
  const { token } = req.cookies;
  const { addedPhotos } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const slideDoc = await Slide.create({
      owner: userData.id,
      photos: addedPhotos,
    });
    res.json(slideDoc);
  });
});

// update a slide
app.put("/slides", async (req, res) => {
  const { token } = req.cookies;
  const { id, addedPhotos } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const slideDoc = await Slide.findById(id);
    if (userData.id === slideDoc.owner.toString()) {
      slideDoc.set({
        photos: addedPhotos,
      });
      await slideDoc.save();
      res.json("ok");
    }
  });
});

// get all slides
app.get("/user-slides", async (req, res) => {
  const slides = await Slide.find();
  res.json(slides);
});

// get slide by id
app.get("/user-slides/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await Slide.findById(id));
});

// delete slide by id
app.delete("/slides/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Slide.deleteOne({ _id: id });
    res.json({ success: true, message: "Slide deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting slide.", error });
  }
});

// add new board
app.post("/boards", (req, res) => {
  const { token } = req.cookies;
  const { title, addedPhotos } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const designBoard = await DesignBoard.create({
      owner: userData.id,
      title: title,
      photos: addedPhotos,
    });
    res.json(designBoard);
  });
});

// update a board
app.put("/boards", async (req, res) => {
  const { token } = req.cookies;
  const { id, title, addedPhotos } = req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const boardDoc = await DesignBoard.findById(id);
    if (userData.id === boardDoc.owner.toString()) {
      boardDoc.set({
        title: title,
        photos: addedPhotos,
      });
      await boardDoc.save();
      res.json("ok");
    }
  });
});

// get all boards
app.get("/user-boards", async (req, res) => {
  const designs = await DesignBoard.find(); // Find user boards
  res.json(designs);
});

// get board by id
app.get("/user-boards/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await DesignBoard.findById(id));
});

// delete board by id
app.delete("/boards/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await DesignBoard.deleteOne({ _id: id });
    res.json({ success: true, message: "Board deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting board.", error });
  }
});

// add new design
app.post("/designs", (req, res) => {
  const { token } = req.cookies;
  const { board, designNumber, title, description, price, addedPhotos } =
    req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    if (err) throw err;
    const designBoard = await Design.create({
      owner: userData.id,
      board: board,
      designNumber: designNumber,
      title: title,
      description: description,
      price: price,
      photos: addedPhotos,
    });
    res.json(designBoard);
  });
});

// update a design
app.put("/designs", async (req, res) => {
  const { token } = req.cookies;
  const { id, board, designNumber, title, description, price, addedPhotos } =
    req.body;
  jwt.verify(token, jwtSecret, {}, async (err, userData) => {
    const designDoc = await Design.findById(id);
    if (userData.id === designDoc.owner.toString()) {
      designDoc.set({
        owner: userData.id,
        board: board,
        designNumber: designNumber,
        title: title,
        description: description,
        price: price,
        photos: addedPhotos,
      });
      await designDoc.save();
      res.json("ok");
    }
  });
});

// get all designs
app.get("/user-designs", async (req, res) => {
  const designs = await Design.find(); // Find user designs
  res.json(designs);
});

// get design by id
app.get("/user-designs/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await Design.findById(id));
});

// delete design by id
app.delete("/designs/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Design.deleteOne({ _id: id });
    res.json({ success: true, message: "Design deleted successfully!" });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Error deleting Design.", error });
  }
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'static/index.html'))
})

app.listen(4000);
