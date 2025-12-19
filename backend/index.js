import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/dbConnection.js";
import authRoutes from "./routes/userRoutes.js"
dotenv.config();
const app = express();
const PORT =  process.env.PORT || 5004;

app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/auth", authRoutes);

// app.get("/", (req, res) => {
//   res.send("ES6 backend is running 🚀");
// });

// app.post("/api/auth/signup", (req, res) => {
//   const { username, email, password } = req.body;

//   // console.log("Signup data received:");
//   // console.log("Username:", username);
//   // console.log("Email:", email);
//   // console.log("Password:", password);
 

//   res.status(201).json({
//     message: "Signup successful",
//     user: { username, email },
//   });
// });
connectDB();

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
