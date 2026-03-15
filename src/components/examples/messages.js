export const chatMessages = [
  "hello chat",
  "how are you doing?",
  "that is so funny",
  "what is going on",
  "i love this emote",
  "chat this is amazing",
  "lol",
  "this is cursed",
  "this emote is perfect",
  "spam it",
  "good one",
  "that is hilarious",
  "this is my new favorite",
  "omg",
  "that is adorable"
];

export function getRandomMessage() {
  const index = Math.floor(Math.random() * chatMessages.length);
  return chatMessages[index];
}