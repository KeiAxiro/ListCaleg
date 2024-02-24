const express = require("express");
const axios = require("axios");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.APP_PORT;

app.use("/static", express.static("public"));
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

//views
var indexRouter = require("./routes/index");
var dpdRouter = require("./routes/dpd");
var dprriRouter = require("./routes/dpr_ri");
var dprdProvRouter = require("./routes/dprd_provinsi");
var dprdKabRouter = require("./routes/dprd_kabupaten");

app.use("/", indexRouter);
app.use("/dpd", dpdRouter);
app.use("/dpr-ri", dprriRouter);
app.use("/dprd-provinsi", dprdProvRouter);
app.use("/dprd-kabupaten", dprdKabRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

module.exports = app;
