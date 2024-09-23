const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const db = require("./db"); // Assuming this connects to your database
app.use(bodyParser.json());

const personRoute = require("./routes/presonRoutes");
const menuRoutes = require("./routes/menuRoutes");
app.use("/person", personRoute);
app.use("/menu", menuRoutes);

app.get("/", function (req, res) {
  res.json({ ok: "Working fine" });
});

app.listen(3000, () => {
  console.log("Server is live..");
});
