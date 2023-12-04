const listener = _.pipe(
  _.get("keyCode"),
  _.includes("keyS"),
  (b) => b && [".ytp-ad-skip-button", ".ytp-ad-overlay-close-button"],
  _.map(document.querySelector),
  _.find(_.identity),
  _.invoke("click")
);

document.addEventListener("keyup", listener);
