function Key(combo, location, small) {

    this.elem = location;
    this.combo = combo;
    this.elem.innerHTML = this.combo.icon;
    this.small = small;
    this.className(KeyState.INACTIVE);

    this.update = function (state) {
        this.className(state);
    }

    this.className = function (state) {
        var className = KEY + " " + state;
        if (small) {
            className += " " + SMALL;
        }
        this.elem.className = className;
    }

}