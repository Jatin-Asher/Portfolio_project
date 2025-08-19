// <!-- static/js/script.js -->
(function () {
  function closest(el, sel) {
    for (; el && el !== document; el = el.parentNode) if (el.matches(sel)) return el;
    return null;
  }

  function run(container) {
    const raw = container.querySelector('.js-raw');
    const output = container.querySelector('.js-output');
    if (!raw || !output) return;

    output.textContent = '';
    let buffer = '';
    const origLog = console.log;

    console.log = function (...args) {
      buffer += args.join(' ') + '\n';
      origLog.apply(console, args);
      output.textContent = buffer;
    };

    try {
      new Function(raw.value)(); // runs the snippet
    } catch (e) {
      output.textContent = e.toString();
    } finally {
      console.log = origLog;
    }
  }

  function copy(container) {
    const raw = container.querySelector('.js-raw');
    if (!raw) return;
    if (navigator.clipboard) navigator.clipboard.writeText(raw.value);
  }

  document.addEventListener('click', function (e) {
    if (e.target.matches('.run-js')) run(closest(e.target, '.snippet-box'));
    if (e.target.matches('.copy-js')) copy(closest(e.target, '.snippet-box'));
  });
})();
