const express = require("express");
const app = express();
const morgan = require("morgan");
require("dotenv").config();

app.use(morgan("dev"));
app.get("*", (req, res) => {
  return res.json({ msg: "OK" });
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on ${port}`);
});
