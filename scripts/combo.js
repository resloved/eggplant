function Combo(icon, action, keys, location) {

    Mapped.call(this);

    this.icon = icon;
    this.action = action;
    this.current = 0;
    this.keys = keys;
    this.complete = false;

    this.reset = function () {
        this.keys[0].update(KeyState.CURRENT);
        for (var i = 1; i < this.keys.length; i++) {
            this.keys[i].update(KeyState.INACTIVE);
        }
        this.current = 0;
    }

    this.next = function () {
        if (this.current != this.keys.length - 1) {
            this.keys[this.current].update(KeyState.COMPLETE);
            this.current += 1
            this.keys[this.current].update(KeyState.CURRENT);
        } else {
            this.complete = true;
        }
    }

    this.update = function (active) {
        if (active.length > 0) {
            if (this.keys[this.current].complete) {
                this.next();
            } else {
                this.reset();
            }
        }
    }

}