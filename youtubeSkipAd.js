const skipAdFn = () => {
  [".ytp-ad-skip-button", ".ytp-ad-overlay-close-button"]
    .map((className) => document.querySelector(className))
    .filter((el) => el)
    .forEach((el) => el.click());
};

const run = (key, fn) => (e) => {
  e.key === key && fn();
};

document.addEventListener("keyup", run("s", skipAdFn));
