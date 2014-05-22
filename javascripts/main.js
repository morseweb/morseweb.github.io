console.log('This would be the main JS file.');

function makeColor(color) {
  for (var i in document.styleSheets[0].rules) {
    var rule  = document.styleSheets[0].rules[i];
    if("#main_content_wrap" == rule.selectorText) {
      rule.style.background = color;
      break;
    }
  }
}

function makeBlack() {
  makeColor("rgb(55, 55, 55)");
}

function makeWhite() {
  makeColor("rgb(242, 242, 242)");
}
