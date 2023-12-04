const state = {
  type: "keyup",
  keyCode: 83,
  classnames: [
    ".ytp-ad-skip-button",
    ".ytp-ad-overlay-close-button",
    "#dismiss-button",
  ],
};

const querySelector = (selector) => document.querySelector(selector);
const clickEl = (el) => el.click();
const skipAdFn = (state) =>
  state.classnames
    .map(querySelector)
    .filter((el) => el)
    .forEach(clickEl);
const listener = (state) => (e) =>
  state.keyCode === e.keyCode && skipAdFn(state);
const addEventListener = (state) =>
  document.addEventListener(state.type, listener(state));

addEventListener(state);
