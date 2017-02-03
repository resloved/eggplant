function Keyboard(toUpdate = []) {

    this.pressed = [];
    this.active = [];
    this.released = [];
    this.toUpdate = toUpdate;

    this.down = function (event) {
        for (var i = 0; i < this.active.length; i++) {
            if (this.active[i] === event.key) {
                return;
            }
        }
        this.active.push(event.key);
        this.update();
    }

    this.up = function (event) {
        for (var i = 0; i < this.active.length; i++) {
            if (this.active[i] === event.key) {
                this.active.splice(i, 1);
                this.update();
                return;
            }
        }
    }

    this.update = function () {
        for (var i = 0; i < this.toUpdate.length; i++) {
            this.toUpdate[i].update(this.active);
        }
    }

}
