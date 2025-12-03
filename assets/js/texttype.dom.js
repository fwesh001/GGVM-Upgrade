(function () {
  var root = document.getElementById('ggvm-texttype-root');
  if (!root) return;

  // Lines to type
  var lines = [
    'Welcome to GGVM — Global Golden Vessels of Mercy',
    'Inspiring hope, spreading compassion, equipping believers',
    'Daily devotionals, motivation, and practical exercises',
    'Join a community that cares and serves',
  ];

  var typingSpeed = 40;
  var deletingSpeed = 25;
  var pauseDuration = 1800;

  var currentLineIndex = 0;
  var currentCharIndex = 0;
  var isDeleting = false;
  var displayedText = '';

  // Create container structure
  var container = document.createElement('div');
  container.className = 'ggvm-texttype';

  var linesDiv = document.createElement('div');
  linesDiv.className = 'ggvm-lines';
  linesDiv.style.flex = '1';

  var cursorSpan = document.createElement('span');
  cursorSpan.textContent = '|';
  cursorSpan.style.marginLeft = '2px';
  cursorSpan.style.animation = 'blink 0.7s infinite';

  linesDiv.appendChild(document.createTextNode(''));
  linesDiv.appendChild(cursorSpan);

  container.appendChild(linesDiv);
  root.appendChild(container);

  // Get the text node to update
  var textNode = linesDiv.childNodes[0];

  // Add blink animation if not present
  if (!document.getElementById('texttype-blink-animation')) {
    var style = document.createElement('style');
    style.id = 'texttype-blink-animation';
    style.textContent = '@keyframes blink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }';
    document.head.appendChild(style);
  }

  // Typing animation loop
  function typeAnimation() {
    var currentLine = lines[currentLineIndex];

    if (isDeleting) {
      // Deleting phase
      if (displayedText.length > 0) {
        displayedText = displayedText.slice(0, -1);
        textNode.textContent = displayedText;
        setTimeout(typeAnimation, deletingSpeed);
      } else {
        // Move to next line
        isDeleting = false;
        currentLineIndex = (currentLineIndex + 1) % lines.length;
        setTimeout(typeAnimation, 300);
      }
    } else {
      // Typing phase
      if (displayedText.length < currentLine.length) {
        displayedText += currentLine[displayedText.length];
        textNode.textContent = displayedText;
        setTimeout(typeAnimation, typingSpeed);
      } else {
        // Start deleting after pause
        isDeleting = true;
        setTimeout(typeAnimation, pauseDuration);
      }
    }
  }

  // Start animation
  typeAnimation();
})();
