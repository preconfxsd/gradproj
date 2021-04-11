const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static('dist'))

app.get("/", (req, res, next) => {
    var options = {
        root: path.join(__dirname, "dist"),
        dotfiles: "deny",
        headers: {
            "x-timestamp": Date.now(),
            "x-sent": true,
        },
    };
    res.sendFile("index.html", options, function (err) {});
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
