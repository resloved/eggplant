function Tray(elem) {

    // Tray represents combo, combo handles nothing

    this.elem = elem;
    // TODO - Fix to relative
    this.icon = document.getElementById("icon");
    this.producer = new ComboProducer();
    this.combos = [];
    this.current = this.producer.generate(6);
    this.keys = [];
    this.upcoming = [];

    this.createKey = function (combo, loc) {
        var elem = document.createElement('div');
        elem.className = KEY;
        loc.appendChild(elem);
        return new Key(combo, elem);
    }

    this.display = function (combo) {
        this.keys = [];
        console.log(this.icon);
        this.icon.innerHtml = "a";
        for (var i = 0; i < combo.keys.length; i++) {
            this.keys.push(
                this.createKey(combo.keys[i], this.elem)
            );
        }
    }

    this.display(this.current);

}
