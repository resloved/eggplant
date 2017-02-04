function Mapped() {

    this.toCompare = []
    this.return = false;

    this.update = function (active) {
        for (var i = 0; i < this.toCompare; i++) {
            this.toCompare[i].compare(active);
        }
        if (this.return)
            this.result(this.toCompare);
    }

    this.result = function (changes) {
        return;
    }

}