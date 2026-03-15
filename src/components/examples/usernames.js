export const usernames = [
  "Felicia",
  "Natasha",
  "Rebecca",
  "Hakan",
  "Ronald",
  "Rebeccaafk"
];

export function getRandomUsername() {
  const index = Math.floor(Math.random() * usernames.length);
  return usernames[index];
}