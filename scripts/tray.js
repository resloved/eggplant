function Tray(elem, amount) {

    // Tray represents combo, combo handles nothing

    this.elem = elem;
    // TODO - Fix to relative
    this.icon = document.getElementById("icon");
    this.producer = new ComboProducer();
    this.combos = [];
    this.active = this.producer.generate(amount);
    this.keys = [];
    this.upcoming = [];

    this.init = function () {
        // On startup
        return 0;
    }

    this.createKey = function (combo, loc) {
        var elem = document.createElement('div');
        elem.className = KEY;
        loc.appendChild(elem);
        return new Key(combo, elem);
    }

    // For new Combo
    this.next = function (combo) {
        this.keys = [];
        this.icon.innerHTML = combo.icon;
        for (var i = 0; i < combo.keys.length; i++) {
            this.keys.push(
                this.createKey(combo.keys[i], this.elem)
            );
        }
    }

    // For current Combo
    this.update = function (keyboard) {
        // Called when keyboard update is called
        // Update active key
        this.active.update(keyboard);
        if(this.active.complete)
            // Reset
            return 0;
        else
            // Redisplay
            return 0;
    }

    this.next(this.active);

}
