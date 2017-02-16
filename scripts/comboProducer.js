function ComboProducer(elem) {

    this.elem = elem;

    this.randomLetter = function () {
        var alphabet = "abcdefghijklmnopqrstuvwxyz";
        return alphabet.charAt(getRandomInt(0, alphabet.length - 1));
    }

    this.randomSymbol = function () {
        var symbols = "❤✓☀★☂♞☯☭☢€☎∞❄♫₽";
        return symbols.charAt(getRandomInt(0, symbols.length - 1));
    }

    this.generate = function (amount) {
        var keys = [];
        for (var i = 0; i < amount; i++) {
            var letter = this.randomLetter();
            keys.push(new Combo(letter, [letter]));
        }
        console.log(this.randomSymbol());
        return new Combo(this.randomSymbol(), keys, ":", elem);
    }

}
