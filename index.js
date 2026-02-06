const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "Hello, World!" });
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
