require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const uploadRoutes = require("./routes/upload");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");

let gfs;
connection();

const conn = mongoose.connection;
conn.once("open", function () {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("images");
});

app.use(express.json());
app.use(cors());

app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/file", uploadRoutes);

app.get("/file/:filename", async (req, res) => {
  try {
    const file = await gfs.files?.findOne({ filename: req.params.filename });
    const readStream = gfs.createReadStream(file.filename);
    readStream.pipe(res);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

app.delete("/file/:filename", async (req, res) => {
  try {
    await gfs.files.deleteOne({ filename: req.params.filename });
    res.send("success");
  } catch (error) {
    console.log(error);
    res.send("An error ocured");
  }
});

const port = process.env.PORT || 4000;
app.listen(port, () =>
  console.log(`Server is up and running on port ${port}...`)
);
