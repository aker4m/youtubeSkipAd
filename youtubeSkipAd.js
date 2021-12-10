const run = (keys, fn) => (e) => { keys.includes(e.key) && fn() }

const skipAdFn = () => { 
  [".ytp-ad-skip-button", ".ytp-ad-overlay-close-button"]
    .map(className => document.querySelector(className))
    .filter(el => el)
    .forEach(el => el.click()) 
}

document.addEventListener('keyup', run(['s', 'S'], skipAdFn))
