"use strict;"
const fs = require("fs"),
    mqpacker = require("css-mqpacker"),
    result = mqpacker.pack(fs.readFileSync("./Stats-preview-card-component/css/style.css", "utf8"), {
        from: "./Stats-preview-card-component/css/style.css",
        map: {
            inline: false
        },
        sort: true,
        to: "to.css"
    });
fs.writeFileSync("./Stats-preview-card-component/css/style.css", result.css);