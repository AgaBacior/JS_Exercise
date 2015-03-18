communication.register('Michał');
communication.addMessageListener(function (kto, co) {
  if (co.element) {
    var element = document.createElement(co.element),
      nazwa;
    if (co.css) {
      for (nazwa in co.css) {
        element.style[nazwa] = co.css[nazwa];
      }
    }
    if (co.innerText) {
      element.innerText = co.innerText;
    }
    element.addEventListener('click', function () {
      alert(kto);
    });
    document.body.appendChild(element);
  }
});
communication.sendTo('Michał', {
  'element': 'div',
  'css': {
    'width': '100px',
    'height': '100px',
    'background': 'red'
  },
  'innerText': 'kopytko'
});
