import express from "express";
import cors from "cors";
import { loginUser } from "./auth.js";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  const result = await loginUser(email, password);

  if (result.error) {
    return res.status(400).json({ error: result.error });
  }

  res.json(result);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
