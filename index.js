Hooks.on("renderSceneControls", (dialog, $element) => {
  const html = document.querySelector('.main-controls');
  html.style.height = '80vh';
  html.style.flex = 'initial';
  html.style.overflowY = "scroll";
  html.style.pointerEvents = "auto";
  html.style.padding ="5px"
});