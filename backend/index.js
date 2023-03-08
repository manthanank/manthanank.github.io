const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require('./mongodb.js');

require("dotenv").config();

app.use(
    cors({
        origin: "*",
    })
);
app.use(bodyParser.json());
app.use(express.static("public"));
app.use(express.json());

app.use(function (err, req, res, next) {
    res.status(422).send({ error: err.message });
});

app.get("/", async (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.use("/api", require("./routes/profile"));

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});