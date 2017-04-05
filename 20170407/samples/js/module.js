var module = {
  target: null,
  createH2tag: function (text) {
    var h2 = document.createElement('h2');
    h2.innerText = text;
    document.body.appendChild(h2);
  },
  cloneElement: function (originElement) {
    if (originElement.nodeType === 1) {
      return originElement.cloneNode(true);
    }
  }
};
