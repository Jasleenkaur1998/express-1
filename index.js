const express = require("express");
const app = express();

const PORT = process.env.PORT || 5050;

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my Express App</h1>`);
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
