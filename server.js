import cors from "cors";
import dotenv from "dotenv";
import express from "express";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// middleware — ORDER MATTERS
app.use(cors());
app.options("*", cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.listen(PORT, () => {
  console.log(`server running on port:${PORT}`);
});
