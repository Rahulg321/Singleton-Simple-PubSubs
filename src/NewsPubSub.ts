class PubSub {
  constructor() {
    this.subscribers = {};
  }

  // Subscribe to a topic
  subscribe(topic, callback) {
    if (!this.subscribers[topic]) {
      this.subscribers[topic] = [];
    }
    this.subscribers[topic].push(callback);
  }

  // Unsubscribe from a topic
  unsubscribe(topic, callback) {
    if (!this.subscribers[topic]) return;
    this.subscribers[topic] = this.subscribers[topic].filter(
      (sub) => sub !== callback
    );
  }

  // Publish a message to a topic
  publish(topic, message) {
    if (!this.subscribers[topic]) return;
    this.subscribers[topic].forEach((callback) => callback(message));
  }
}

// Example usage
const pubSub = new PubSub();

function sportsNewsSubscriber(news) {
  console.log(`Sports News: ${news}`);
}

function weatherNewsSubscriber(news) {
  console.log(`Weather News: ${news}`);
}

// Subscribers subscribe to topics
pubSub.subscribe("sports", sportsNewsSubscriber);
pubSub.subscribe("weather", weatherNewsSubscriber);

// Publish messages to topics
pubSub.publish("sports", "Team A won the match!");
pubSub.publish("weather", "It is going to rain today.");

// Output:
// Sports News: Team A won the match!
// Weather News: It is going to rain today.

// Unsubscribe from a topic
pubSub.unsubscribe("sports", sportsNewsSubscriber);

// Publish another message to the sports topic
pubSub.publish("sports", "Team B won the championship!");

// No output for sports news as there are no subscribers left
