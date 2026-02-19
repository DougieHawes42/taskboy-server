import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

// start listen
app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
