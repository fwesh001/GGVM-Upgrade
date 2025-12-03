(function () {
  var root = document.getElementById('ggvm-shiny-root');
  if (!root) return;

  // If React rendered already, skip
  if (root.dataset && root.dataset.rendered === 'react') return;

  // Read attributes
  var text = root.getAttribute('data-default') || 'Global Golden Vessels of Mercy';
  var speedAttr = root.getAttribute('data-speed');
  var speed = speedAttr ? parseFloat(speedAttr) : 2.2;
  if (isNaN(speed) || speed <= 0) speed = 2.2;

  // Create plain DOM element
  var h1 = document.createElement('h1');
  h1.className = 'hero-title shiny-text';
  h1.textContent = text;
  h1.style.setProperty('--shine-duration', speed + 's');

  // Replace the root's contents
  while (root.firstChild) root.removeChild(root.firstChild);
  root.appendChild(h1);

  // Mark as rendered by DOM
  if (root.dataset) root.dataset.rendered = 'dom';
})();
