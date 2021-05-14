"use strict;"
const fs = require("fs"),
    mqpacker = require("css-mqpacker"),
    result = mqpacker.pack(fs.readFileSync("./3-column-preview-card-component-main/css/style.css", "utf8"), {
        from: "./3-column-preview-card-component-main/css/style.css",
        map: {
            inline: false
        },
        sort: true,
        to: "to.css"
    });
fs.writeFileSync("./3-column-preview-card-component-main/css/style.css", result.css);