// it need to keep a track of who all users are subscribed to an apple stock
// whenever a new change change is there in the apple stock
// broadcast a message to the subscribers of apple stock

export class PubSubManager {
  private static instance: PubSubManager;
  private subscribers: Map<string, string[]> = new Map();

  constructor() {
    this.subscribers = new Map();
  }

  public static getInstance() {
    if (!PubSubManager.instance) {
      PubSubManager.instance = new PubSubManager();
    }
    return PubSubManager.instance;
  }

  sendMessage(message: string, userId: string) {
    console.log(`Sending message to user ${userId}: ${message}`);
  }

  subscribeUserToStock(userId: string, stockId: string) {
    this.subscribers.set(stockId, [userId]);
  }

  unsubscribeUserFromStock(userId: string, stockId: string) {
    const subscribers = this.subscribers.get(stockId);
    if (subscribers) {
      const index = subscribers.indexOf(userId);
      if (index !== -1) {
        subscribers.splice(index, 1);
      }
    }
  }

  broadcastMessage(message: string) {
    this.subscribers.forEach((subscribers, stockId) => {
      subscribers.forEach((userId) => {
        this.sendMessage(message, userId);
      });
    });
  }
}
