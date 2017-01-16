var keyboard = new Keyboard();
var reader = new Reader();
keyboard.toUpdate.push(reader);

document.onkeydown = function myFunction(){ keyboard.down(event); };
document.onkeyup = function myFunction(){ keyboard.up(event); };

