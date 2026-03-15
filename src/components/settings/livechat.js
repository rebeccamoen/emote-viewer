const liveChatTimers = new Map();
const liveChatState = new Map();

function getRandomDelay(minDelay, maxDelay) {
  return Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;
}

function buildVisibleMessages(pool, startIndex, visibleCount) {
  const visible = [];

  for (let i = 0; i < visibleCount; i += 1) {
    const index = (startIndex + i) % pool.length;
    visible.push(pool[index]);
  }

  return visible.join("");
}

export function startLiveChat({
  container,
  buildMessage,
  visibleSelector,
  poolSize = 20,
  minDelay = 500,
  maxDelay = 2000,
  afterRender,
}) {
  if (!container || typeof buildMessage !== "function") {
    return;
  }

  stopLiveChat(container);

  const visibleCount = container.querySelectorAll(visibleSelector).length || 5;

  const pool = Array.from({ length: poolSize }, () => buildMessage());

  const state = {
    pool,
    currentIndex: 0,
    visibleCount,
  };

  liveChatState.set(container, state);

  const tick = () => {
    const current = liveChatState.get(container);
    if (!current) return;

    current.currentIndex = (current.currentIndex + 1) % current.pool.length;

    container.innerHTML = buildVisibleMessages(
      current.pool,
      current.currentIndex,
      current.visibleCount
    );

    if (typeof afterRender === "function") {
      afterRender(container);
    }

    scheduleNext();
  };

  const scheduleNext = () => {
    const delay = getRandomDelay(minDelay, maxDelay);
    const timerId = window.setTimeout(tick, delay);
    liveChatTimers.set(container, timerId);
  };

  scheduleNext();
}

export function stopLiveChat(container) {
  if (!container) return;

  const timerId = liveChatTimers.get(container);
  if (timerId !== undefined) {
    window.clearTimeout(timerId);
    liveChatTimers.delete(container);
  }

  liveChatState.delete(container);
}

export function stopAllLiveChat() {
  for (const timerId of liveChatTimers.values()) {
    window.clearTimeout(timerId);
  }

  liveChatTimers.clear();
  liveChatState.clear();
}