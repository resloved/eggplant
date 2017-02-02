var combo = new Combo("🍆", ":", 5, document.getEementById(COMBO));
var kts = new KeyToScreen();
var keyboard = new Keyboard([combo, kts]);

document.addEventListener('keydown', keyboard.down);
document.addEventListener('keyup', keyboard.up);

// document.onkeydown = function(event) { keyboard.down(event); };
// document.onkeyup = function(event) { keyboard.up(event); };
