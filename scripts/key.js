function Key(combo, loc, small) {

    this.elem = loc;
    this.combo = combo;
    this.elem.innerHTML = combo.icon;
    this.small = small;

    this.className = function (state) {
        var className = KEY + " " + state;
        if (small) {
            className += " " + SMALL;
        }
        this.elem.className = className;
    }

    this.update = function (state) {
        this.className(state);
    }

    this.className(KeyState.INACTIVE);

}