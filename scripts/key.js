function Key(letter, location, small) {
    
    this.letter = letter;
    this.code = keyToCode(letter);
    this.elem = location;
    this.elem.innerHTML = this.letter;
    this.state = KeyState.INACTIVE;
    this.stroke = new Stroke(this.code);
    this.small = small;
    
    this.update = function (state) {
        this.state = state;
        this.className(state);
    }
    
    this.className = function () {
        var className = KEY + " " + this.state;
        if (small) {
            className += " " + SMALL;
        }
        this.elem.className = className;
    }
    
    this.setLetter = function (letter) {
        this.letter = letter;
        this.code = keyToCode(letter);
        this.elem.innerHTML = this.letter;
        this.stroke = new Stroke(this.code);
    }
    
}