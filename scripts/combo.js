function Combo(icon, action, keys, location) {

    Mapped.call(this);

    this.icon = icon;
    this.action = action;
    this.elem = location;
    this.current = 0;

    this.createKey = function (letter, location) {
        var elem = document.createElement('div');
        elem.className = KEY;
        var node = document.createTextNode(letter);
        elem.appendChild(node);
        location.appendChild(elem);
        return new Key(letter, elem);
    }

    this.randomLetter = function () {
        var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        return alphabet.charAt(getRandomInt(0, alphabet.length - 1));
    }

    this.generate = function (amount) {
        var toReturn = [];
        for (var i = 0; i < amount; i++) {
            toReturn.push(this.createKey(this.randomLetter(), this.elem))
        }
        toReturn[0].update(KeyState.CURRENT);
        return toReturn;
    }

    this.regenerate = function () {
        for (var i = 0; i < this.keys.length; i++) {
            this.keys[i].setLetter(this.randomLetter());
        }
    }

    this.keys = this.generate(keys);

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
            this.complete();
        }
    }

    this.complete = function () {
        document.getElementById('icon').innerHTML =
            1 + parseInt(document.getElementById('icon').innerHTML);
        this.reset();
        this.regenerate();
    }

    this.update = function (active) {
        if (active.length > 0) {
            if (this.keys[this.current].stroke.solved(active)) {
                this.next();
            } else {
                this.reset();
            }
        }
    }

}