var charCodes=new Array(36);
charCodes["a"]=". _";
charCodes["b"]="_ . . .";
charCodes["c"]="_ . _ .";
charCodes["d"]="_ . .";
charCodes["e"]=".";
charCodes["f"]=". . _ .";
charCodes["g"]="_ _ .";
charCodes["h"]=". . . .";
charCodes["i"]=". .";
charCodes["j"]=". _ _ _";
charCodes["k"]="_ . _";
charCodes["l"]=". _ . .";
charCodes["m"]="_ _";
charCodes["n"]="_ .";
charCodes["o"]="_ _ _";
charCodes["p"]=". _ _ .";
charCodes["q"]="_ _ . _";
charCodes["r"]=". _ .";
charCodes["s"]=". . .";
charCodes["t"]="_";
charCodes["u"]=". . _";
charCodes["v"]=". . . _";
charCodes["w"]=". _ _";
charCodes["x"]="_ . . _";
charCodes["y"]="_ . _ _";
charCodes["z"]="_ _ . .";
charCodes["1"]=". _ _ _ _";
charCodes["2"]=". . _ _ _";
charCodes["3"]=". . . _ _";
charCodes["4"]=". . . . _";
charCodes["5"]=". . . . .";
charCodes["6"]="_ . . . .";
charCodes["7"]="_ _ . . .";
charCodes["8"]="_ _ _ . .";
charCodes["9"]="_ _ _ _ .";
charCodes["0"]="_ _ _ _ _";

var stack = "";
var isPlaying = false;

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

function Play(phrase) {
  var morsePhrase = "";
  for (var i in phrase) {
    if (phrase[i] in charCodes) {
      morsePhrase += charCodes[phrase[i]];
    }
    // TODO skip " " if empty
    morsePhrase += " ";
  }
  console.log(morsePhrase);
  // TODO skip " " if empty
  stack = stack + " " + morsePhrase;
  
  if (isPlaying == true) {
    return;
  }
  isPlaying=true;
  console.log("start playing stack: [" + stack + "]");
  PlayLetters();
}

function PlayLetters() {
  if(stack == "") {
    isPlaying = false;
    return;
  }
  var x = stack[0];
  stack = stack.substring(1, stack.length);
  console.log("Play [" + x + "], remaining  stack: [" + stack + "]");
  var l = 100;
  if (x == '.') {
    makeWhite();
    l = 1000;
  } else if (x == '_') {
    makeWhite();
    l = 2000;
  }
  console.log("go to black after " + l);
  setTimeout(goBackToBlack, l);
}

function goBackToBlack() {
  makeBlack();
  console.log("Made black, continue after 1000");
  setTimeout(PlayLetters, 1000);
}
