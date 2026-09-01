(function () {
  var script = document.currentScript;
  NeikiEditor.registerTheme({
    name: 'dracula',
    label: 'Dracula',
    dark: true,
    cssUrl: new URL('theme.css', script.src).href
  });
})();
