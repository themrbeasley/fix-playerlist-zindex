Hooks.on("renderSceneControls", (dialog, $element) => {
  const html = document.querySelector('.main-controls');
  html.style.height = '80vh';
  html.style.overflowY = "auto";
  html.style.pointerEvents = "auto";
});