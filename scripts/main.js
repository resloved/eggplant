var combo = new Combo("🍆", ":", 5, document.getElementById(COMBO));
var kts = new KeyToScreen();
var keyboard = new Keyboard([combo, kts]);

// document.addEventListener('keydown', keyboard.down);
// document.addEventListener('keyup', keyboard.up);

document.onkeydown = function myFunction(event){ keyboard.down(event); };
document.onkeyup = function myFunction(event){ keyboard.up(event); };
