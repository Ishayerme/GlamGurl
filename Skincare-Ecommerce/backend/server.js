// import express from "express";
// import cors from "cors";
// import productroutes from "./routes/productroutes.js";
// import { db } from "./db.js"; // ✅ Ensure this is pointing correctly
// import usersRoute from './users';  // Import users routes
// import ordersRoute from './orders';

// const app = express();

// app.use(cors());
// app.use(express.json()); // to parse JSON

// // Routes
// app.use("/", productroutes);
// // Use user routes for registration and login
// app.use('/api/users', usersRoute);

// // Use order routes for placing and managing orders
// app.use('/api/orders', ordersRoute);

// // ✅ Add product from admin
// app.post("/admin", (req, res) => {
//     const { name, description, price, image, category } = req.body;
  
//     if (!name || !price || !category) {
//       return res.status(400).json({ error: "Missing required fields" });
//     }
  
//     const sql = "INSERT INTO products (name, description, price, image, category) VALUES (?, ?, ?, ?, ?)";
//     const values = [name, description, price, image, category];
  
//     db.query(sql, values, (err, result) => {
//       if (err) {
//         console.error("DB Insert Error:", err);
//         return res.status(500).json({ error: "Failed to insert product" });
//       }
  
//       return res.status(200).json({
//         message: "Product added successfully",
//         productId: result.insertId,
//       });
//     });
//   });
  
// // Start server
// app.listen(5000, () => {
//   console.log("🚀 Server running at http://localhost:5000");
// });



import express from "express";
import cors from "cors";
import productroutes from "./routes/productroutes.js";
import { db } from "./db.js";
import usersRoute from './users.js';
import ordersRoute from './orders.js';
import path from "path";
import { fileURLToPath } from "url";
import multer from "multer";  // Import multer for handling file uploads

// Simulate __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Enable CORS and parse JSON requests
app.use(cors());
app.use(express.json());  // To parse JSON
app.use(express.static("public"));  // Make public folder accessible

// Configure multer storage and file filter for image upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/images");  // Store images in the "public/images" folder
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1E9);
    cb(null, file.fieldname + "-" + uniqueSuffix + path.extname(file.originalname)); // Ensure unique filenames
  }
});

const upload = multer({ storage: storage });

// Routes
app.use("/", productroutes);
app.use('/api/users', usersRoute);
app.use('/api/orders', ordersRoute);

// Serve static files (like images)
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// ✅ Add product from admin (with image upload functionality)
app.post("/admin", upload.single("image"), (req, res) => {
  const { name, description, price, category } = req.body;
  const image = req.file ? req.file.filename : null;  // Handle image if uploaded

  if (!name || !price || !category) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  // Insert product details into DB (including image if provided)
  const sql =
    "INSERT INTO products (name, description, price, category, image) VALUES (?, ?, ?, ?, ?)";
  const values = [name, description, price, category, image];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error("DB Insert Error:", err);
      return res.status(500).json({ error: "Failed to insert product" });
    }

    return res.status(200).json({
      message: "Product added successfully",
      productId: result.insertId,
    });
  });
});

// Start server
app.listen(5000, () => {
  console.log("🚀 Server running at http://localhost:5000");
});
