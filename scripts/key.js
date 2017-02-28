function Key(combo, loc, small) {

    this.elem = loc;
    this.combo = combo;
    this.elem.innerHTML = combo.icon;
    this.small = small;
    this.state = KeyState.INACTIVE;

    this.className = function (state) {
        var className = KEY + " " + state;
        if (small) {
            className += " " + SMALL;
        }
        this.elem.className = className;
    }

    this.update = function (keyboard) {
        state = this.combo.update(keyboard);
        this.className(state);
        return state;
    }

    this.className(KeyState.INACTIVE);

}