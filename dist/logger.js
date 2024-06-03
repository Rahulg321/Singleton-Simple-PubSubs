"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_1 = require("./store");
function startLogger() {
    const games = store_1.gameManager.getGames();
    console.log("Starting logger...");
    setInterval(() => {
        console.log("Logging games...", games);
    }, 5000);
}
exports.default = startLogger;
