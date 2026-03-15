export const chatMessages = [
  "hello chat",
  "how are you doing?",
  "what is going on",
  "i love this emote",
  "chat this is amazing",
  "lol",
  "this is CUTE",
  "this emote is perfect",
  "spam it",
  "good one",
  "that is hilarious",
  "this is my new favorite",
  "omg",
  "that is adorable",
  "HIII",
  "that makes sense",
  "you got this!",
  "i knooooow",
  "wait this game looks so cute",
  "i love minecraft",
  "fortnite battlepass"
];

const RECENT_MESSAGE_LIMIT = 10;
const recentMessages = [];

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getRandomMessage() {
  if (chatMessages.length === 0) {
    return "";
  }

  const availableMessages = chatMessages.filter((msg) => {
    return !recentMessages.includes(msg);
  });

  const pool = availableMessages.length > 0 ? availableMessages : chatMessages;
  const chosenMessage = getRandomItem(pool);

  recentMessages.push(chosenMessage);

  if (recentMessages.length > RECENT_MESSAGE_LIMIT) {
    recentMessages.shift();
  }

  return chosenMessage;
}