function Tray() {

    // Tray represents combo, combo handles nothing

    this.createKey = function (letter, location) {
        var elem = document.createElement('div');
        elem.className = KEY;
        var node = document.createTextNode(letter);
        elem.appendChild(node);
        location.appendChild(elem);
        return new Key(letter, elem);
    }

}
