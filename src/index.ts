import startLogger from "./logger";
import { gameManager } from "./store";

startLogger();

setInterval(() => {
  const data = {
    id: Math.random().toString(36),
    whitePlayerName: "rahul",
    blackPlayerName: "surbhi",
    moves: [],
  };

  gameManager.addGame(data);
}, 5000);
