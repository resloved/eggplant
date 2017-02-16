var game = new Game(document.getElementById(GAME));
var keyboard = new Keyboard([game]);

document.onkeydown = function (event) { keyboard.down(event); };
document.onkeyup = function (event) { keyboard.up(event); };
