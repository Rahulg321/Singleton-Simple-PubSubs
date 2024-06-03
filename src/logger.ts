import { gameManager } from "./store";

function startLogger() {
  const games = gameManager.getGames();
  console.log("Starting logger...");
  setInterval(() => {
    console.log("Logging games...", games);
  }, 5000);
}

export default startLogger;
