type Game = {
  id: string;
  whitePlayerName: string;
  blackPlayerName: string;
  moves: string[];
};

// creting a singleton pattern class that returns only a singleton instance of a class
export class GameManager {
  games: Game[] = [];
  private static instance: GameManager;

  private constructor() {
    this.games = [];
  }

  static getInstance() {
    // create a single instance of Game Manager and return it
    if (!GameManager.instance) {
      GameManager.instance = new GameManager();
    }
    return GameManager.instance;
  }

  addGame(game: Game) {
    this.games.push(game);
  }

  addMove(id: string, move: string) {
    const game = this.getGame(id);
    if (game) {
      game.moves.push(move);
    } else {
      console.log("could not find game for making a move");
    }
  }

  getGame(id: string) {
    return this.games.find((game) => game.id === id);
  }

  getGames() {
    return this.games;
  }

  removeGame(id: string) {
    this.games = this.games.filter((game) => game.id !== id);
  }
}

export const gameManager = GameManager.getInstance();
