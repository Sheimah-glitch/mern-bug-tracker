import express from "express";
import cors from "cors";
import bugRoutes from "./routes/bugRoutes.js";

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use("/api/bugs", bugRoutes);

// error handler middleware
app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

export default app;
