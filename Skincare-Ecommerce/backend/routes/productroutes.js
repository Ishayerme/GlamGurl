// import express from "express";
// import { db } from "../db.js"; // Ensure the db.js is correctly set up

// const router = express.Router();

// // GET all products
// router.get("/products", (req, res) => {
//   db.query("SELECT * FROM products", (err, result) => {
//     if (err) return res.status(500).json({ error: err });
//     res.json(result); // Sends the data as JSON
//   });
// });

// export default router;
import express from "express";
import multer from "multer";
import path from "path";
import { db } from "../db.js";
import { fileURLToPath } from "url";
import { dirname } from "path";

const router = express.Router();

// Fix for __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// ✅ Multer setup for image uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../public/images")); // Use absolute path
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname)); // Avoid name conflicts
  },
});

const upload = multer({ storage });

// ✅ Route: Get all products
router.get("/products", (req, res) => {
  db.query("SELECT * FROM products", (err, result) => {
    if (err) return res.status(500).json({ error: err });

    // Add the correct image URL to each product object
    const productsWithImageUrls = result.map((product) => {
      return {
        ...product,
        imageUrl: `/images/${product.image}`, // Send the full image path
      };
    });

    res.json(productsWithImageUrls);
  });
});

// ✅ Route: Add new product with image
router.post("/add", upload.single("image"), (req, res) => {
  const { name, description, price, category } = req.body;
  const image = req.file ? req.file.filename : "";

  if (!name || !price || !category || !image) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const sql =
    "INSERT INTO products (name, description, price, category, image) VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [name, description, price, category, image], (err, result) => {
    if (err)
      return res
        .status(500)
        .json({ message: "Failed to add product", error: err });
    res.status(201).json({ message: "Product added successfully", id: result.insertId });
  });
});

export default router;
