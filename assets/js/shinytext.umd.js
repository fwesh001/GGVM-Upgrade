(function (global) {
  var React = global.React;
  if (!React) {
    console.warn('ShinyText: React not found on window.React');
    return;
  }

  function ShinyText(props) {
    props = props || {};
    var text = props.text || 'Just some shiny text!';
    var disabled = !!props.disabled;
    var speed = typeof props.speed === 'number' ? props.speed : (props.speed ? parseFloat(props.speed) : 2.2);
    var className = props.className || '';
    var duration = (isNaN(speed) ? 2.2 : Math.max(0.1, speed)) + 's';
    var style = { '--shine-duration': duration, opacity: disabled ? 0.75 : 1 };

    return React.createElement('h1', { className: (className ? className + ' ' : '') + 'shiny-text', style: style }, text);
  }

  global.ShinyText = ShinyText;
})(window);
