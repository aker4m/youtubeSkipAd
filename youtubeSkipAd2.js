const KEYUP = "keyup";
const CODE = "KeyS";
const selectors = [
  ".ytp-ad-skip-button",
  ".ytp-ad-overlay-close-button",
  "#dismiss-button",
];

const identity = (v) => v;
const composition = (a, f) => f(a);
const pipe =
  (...fns) =>
  (arg) =>
    fns.reduce(composition, arg);
const curry2 = (f) => (a) => (b) => f(a, b);
const map = curry2((f, arr) => arr.map(f));
const filter = curry2((f, arr) => arr.filter(f));
const forEach = curry2((f, arr) => arr.forEach(f));

const getSelectors = (code, selectors) => (e) =>
  e.code === code ? selectors : [];
const querySelector = (selector) => document.querySelector(selector);
const clickEl = (el) => el.click();
const skipAd = pipe(
  getSelectors(CODE, selectors),
  map(querySelector),
  filter(identity),
  forEach(clickEl)
);

document.addEventListener(KEYUP, skipAd);
