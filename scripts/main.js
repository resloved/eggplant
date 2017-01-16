var combo = new Combo("🍆", ":", 5, document.getElementById(COMBO));
var kts = new KeyToScreen();
var keyboard = new Keyboard([combo, kts]);

document.onkeydown = function myFunction(){ keyboard.down(event); };
document.onkeyup = function myFunction(){ keyboard.up(event); };
