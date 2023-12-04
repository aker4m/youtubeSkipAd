const run = (keys, fn) => (e) => {
  keys.includes(e.key) && fn();
};

const skipAdFn = () =>
  [...document.querySelectorAll("button")]
    .filter((el) => el.className.includes("skip"))
    .forEach((el) => el.click());

document.addEventListener("keyup", run(["s", "S"], skipAdFn));
