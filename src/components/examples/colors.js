export const TWITCH_USERNAME_COLORS = [
  "#b22222",
  "#ff7f50",
  "#9acd32",
  "#2e8b57",
  "#daa520",
  "#5f9ea0",
  "#1e90ff",
  "#ff69b4",
  "#8a2be2",
];

export const DISCORD_USERNAME_COLORS = [
  "#fa8db7",
  "#9ce6a7",
  "#e6c95c",
  "#91dafb",
  "#d58567",
  "#d0abf0",
  "#da947a",
  "#b6cfb6",
  "#df6987",
  "#992d22",
];

let lastTwitchColor = null;
let lastDiscordColor = null;

function hashString(value) {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash * 31 + value.charCodeAt(i)) >>> 0;
  }

  return hash;
}

function getColorForUsername(username, palette, lastColorRef) {
  if (!username || palette.length === 0) {
    return "#ffffff";
  }

  let index = hashString(username.toLowerCase()) % palette.length;
  let color = palette[index];

  // prevent same color twice in a row
  if (color === lastColorRef.value) {
    index = (index + 1) % palette.length;
    color = palette[index];
  }

  lastColorRef.value = color;
  return color;
}

export function getTwitchColorForUsername(username) {
  const ref = { value: lastTwitchColor };
  const color = getColorForUsername(username, TWITCH_USERNAME_COLORS, ref);
  lastTwitchColor = ref.value;
  return color;
}

export function getDiscordColorForUsername(username) {
  const ref = { value: lastDiscordColor };
  const color = getColorForUsername(username, DISCORD_USERNAME_COLORS, ref);
  lastDiscordColor = ref.value;
  return color;
}