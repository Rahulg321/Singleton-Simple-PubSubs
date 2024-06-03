"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
class GameManager {
    constructor() {
        this.games = [];
        this.games = [];
    }
    addGame(game) {
        this.games.push(game);
    }
    addMove(id, move) {
        const game = this.getGame(id);
        if (game) {
            game.moves.push(move);
        }
        else {
            console.log("could not find game for making a move");
        }
    }
    getGame(id) {
        return this.games.find((game) => game.id === id);
    }
    getGames() {
        return this.games;
    }
    removeGame(id) {
        this.games = this.games.filter((game) => game.id !== id);
    }
}
exports.GameManager = GameManager;
exports.gameManager = new GameManager();
