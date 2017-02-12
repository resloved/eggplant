function Keyboard(toUpdate = []) {

    this.pressed = [];
    this.active = [];
    this.released = [];
    this.toUpdate = toUpdate;

    this.down = function (event) {
        this.toActive();
        this.pressed.push(event.key);
        this.update();
    }

    this.up = function (event) {
        this.toActive();
        this.active = this.active.splice(this.active.indexOf(event.key), 1);
        this.update();
    }

    this.toActive = function () {
        this.active.concat(this.pressed);
        this.pressed = [];
    }

    this.update = function () {
        for (var i = 0; i < this.toUpdate.length; i++) {
            this.toUpdate[i].update(this.pressed);
        }
    }

}
