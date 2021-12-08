const run = (key, fn) => (e) => { if(e.key === key) fn() }
const skipAdFn = () => { [".ytp-ad-skip-button", ".ytp-ad-overlay-close-button"].map(className => document.querySelector(className)).filter(el => el).forEach(el => el.click()) }
document.addEventListener('keyup', run('s', skipAdFn))
