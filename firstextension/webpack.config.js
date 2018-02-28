const path = require("path");

module.exports = {
    entry: {
        background_scripts: "./background.js",
    },
    output: {
        path: path.resolve(__dirname),
        filename: "[name]/index.js"
    }
};
