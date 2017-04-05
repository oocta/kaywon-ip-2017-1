/**
 * 매개변수로 입력된 엘리먼트를 복제한 엘리먼트를 반환한다.
 * @param {Element} element
 */
function createH2tag(text) {
  var h2 = document.createElement('h2');
  h2.innerText = text;
  document.body.appendChild(h2);
}

createH2tag('yolo!');
