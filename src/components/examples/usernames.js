export const usernames = [
  "Felicia",
  "Natasha",
  "Rebecca",
  "Hakan",
  "Ronald",
  "rebeccaafk",
  "Duc",
  "elwoods",
  "ulvenia",
  "felle",
  "nutella",
  "neo",
  "Alex",
  "buneary",
  "bonnie",
  "koda",
  "mira",
  "pia",
  "kedi"
];

const RECENT_USERNAME_LIMIT = 10;
const recentUsernames = [];

function getRandomItem(items) {
  return items[Math.floor(Math.random() * items.length)];
}

export function getRandomUsername() {
  if (usernames.length === 0) {
    return "User";
  }

  const availableUsernames = usernames.filter((username) => {
    return !recentUsernames.includes(username);
  });

  const pool = availableUsernames.length > 0 ? availableUsernames : usernames;
  const chosenUsername = getRandomItem(pool);

  recentUsernames.push(chosenUsername);

  if (recentUsernames.length > RECENT_USERNAME_LIMIT) {
    recentUsernames.shift();
  }

  return chosenUsername;
}