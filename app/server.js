const express = require("express");

const app = express();

let crashMode = false;

app.get("/", (req, res) => {
    res.send("Version 2 Running");
});

app.get("/health", (req, res) => {
    if (crashMode) {
        return res.status(500).send("App crashed");
    }

    res.send("healthy");
});

app.get("/crash", (req, res) => {
    crashMode = true;
    res.send("Crash mode enabled");
});

app.listen(3000, () => {
    console.log("Server started on port 3000");
});