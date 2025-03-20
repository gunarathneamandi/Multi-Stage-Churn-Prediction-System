import express from "express";
import cors from "cors";
import admin from "firebase-admin";
import fs from "fs";

// Initialize Firebase Admin SDK
const serviceAccount = JSON.parse(fs.readFileSync("./firebase-config.json"));

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const app = express();
app.use(cors());
app.use(express.json());

// User Login Route
app.post("/login", async (req, res) => {
  const { idToken } = req.body; // Get Firebase Auth Token from frontend

  try {
    // Verify Firebase ID Token
    const decodedToken = await admin.auth().verifyIdToken(idToken);
    const uid = decodedToken.uid;
    res.json({ message: "Login successful", uid });
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
