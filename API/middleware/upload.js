const multer = require("multer");
const { GridFsStorage } = require("multer-gridfs-storage");

const storage = new GridFsStorage({
  url: process.env.DATABASE_ACCESS,
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    const match = ["image/png", "image/jpeg"];

    if (match.indexOf(file.mimetype) === -1) {
      const filename = `${Date.now()}-img-${file.originalname}`;
      return filename;
    }

    return {
      bucketName: "images",
      filename: `${Date.now()}-img-${file.originalname}`,
    };
  },
});

module.exports = multer({ storage });
