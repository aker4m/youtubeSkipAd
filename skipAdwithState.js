const state = {
  type: "keyup",
  keys: ["s", "S"],
  classnames: [".ytp-ad-skip-button", ".ytp-ad-overlay-close-button"],
};

const querySelector = (selector) => document.querySelector(selector);
const clickEl = (el) => el.click();
const skipAdFn = (state) =>
  state.classnames
    .map(querySelector)
    .filter((el) => el)
    .forEach(clickEl);
const listener = (state) => (e) =>
  state.keys.includes(e.key) && skipAdFn(state);
const addEventListener = (state) =>
  document.addEventListener(state.type, listener(state));

addEventListener(state);
