var voice = [
  ["a", "i", "u", "e", "o"],
  ["ka", "ki", "ku", "ke", "ko"],
  ["sa", "shi", "su", "se", "so"],
  ["ta", "chi", "tsu", "te", "to"],
  ["na", "ni", "nu", "ne", "no"],
  ["ha", "hi", "fu", "he", "ho"],
  ["ma", "mi", "mu", "me", "mo"],
  ["ya", "yu", "yo", "wa", "(w)o"],
  ["ra", "ri", "ru", "re", "ro"],
  // ["ga", "gi", "gu", "ge", "go"],
  // ["za", "zi", "zu", "ze", "zo"],
  // ["da", "z(d)i", "z(d)u", "de", "do"],
  // ["ba", "bi", "bu", "be", "bo"],
  // ["pa", "pi", "pu", "pe", "po"],
];
var time = 2000;
var timer;
var route = "hi";

function startTest() {
  change();
  timer = setInterval(change, time);
}

function stopTest() {
  clearInterval(timer);
}

function stopTest() {
  clearInterval(timer);
  change();
}

function setHiragana() {route = "hi";}
function setKatakana() {route = "ka";}

function change() {
  var a, b;
  var st = document.getElementById("start").value;
  var ed = document.getElementById("end").value;
  a = parseInt(st - 1 + Math.random() * ed);
  b = parseInt(Math.random() * 5);
  if (document.getElementById("output").innerHTML ==
    `<img src="images/${route}/${voice[a][b]}.PNG" alt="${voice[a][b]}" />`) change();
  else
    document.getElementById("output").innerHTML =
      `<img src="images/${route}/${voice[a][b]}.PNG" alt="${voice[a][b]}" />`;
}

function setTime() {
  time = document.getElementById("time").value * 1000;
}
