import { getRandomMessage } from "./messages.js";

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function buildEmoteSlots(count) {
  return Array.from({ length: count }, (_, index) => {
    return `<span class="emote-slot" data-emote="${index % 3}"></span>`;
  }).join(" ");
}

export function getExampleChatContent() {
  const roll = Math.random();

  // 45%: emote spam only
  if (roll < 0.45) {
    return {
      type: "emote-only",
      html: buildEmoteSlots(3)
    };
  }

  // 35%: text + emotes
  if (roll < 0.80) {
    const message = getRandomMessage();
    const emoteCount = randomInt(1, 2);

    return {
      type: "text-with-emotes",
      html: `${message} ${buildEmoteSlots(emoteCount)}`
    };
  }

  // 20%: plain text
  return {
    type: "text-only",
    html: getRandomMessage()
  };
}