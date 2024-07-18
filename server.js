// import express from "express";
// import colors from "colors";
// import dotenv from "dotenv";
// import morgan from "morgan";
// import connectDB from "./config/db.js";
// import authRoutes from "./routes/authRoute.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import productRoutes from "./routes/productRoutes.js";
// import cors from "cors";

// //configure env
// dotenv.config();

// //databse config
// connectDB();

// //rest object
// const app = express();

// //middelwares
// app.use(cors());
// app.use(express.json());
// app.use(morgan("dev"));
// app.use(express.static(path.resolve(__dirname, "build")));

// //routes
// // app.get('/')
// app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/category", categoryRoutes);
// app.use("/api/v1/product", productRoutes);
// app.use(express.static(path.join(__dirname, "./client/build")));

// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
// });
// //rest api
// app.get("/", (req, res) => {
//   res.send("<h1>Welcome to ecommerce app</h1>");
// });

// //PORT
// const PORT = process.env.PORT || 8080;

// //run listen
// app.listen(PORT, () => {
//   console.log(
//     `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
//       .white
//   );
// });
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

// Configure environment variables
dotenv.config();

// Connect to the database
connectDB();

// Create an Express application
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoutes);
app.use("/api/v1/product", productRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/build/index.html"));
});

// Default route
app.get("/", (req, res) => {
  res.send("<h1>Welcome to ecommerce app</h1>");
});

// Set the port
const PORT = process.env.PORT || 8080;

// Start the server
app.listen(PORT, () => {
  console.log(
    `Server Running in ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
      .white
  );
});
