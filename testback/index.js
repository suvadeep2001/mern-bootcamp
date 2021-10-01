const express = require("express");

const app = express();

const port = 8000;

app.get("/", (req, res) => {
  return res.send("hello world");
});

app.get("/signup", (req, res) => {
  return res.send("signup successful");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
