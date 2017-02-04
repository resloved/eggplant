function ComboProducer() {

    this.randomLetter = function () {
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
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

}
