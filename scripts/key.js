function Key(letter, location, small) {
    
    this.letter = letter;
    this.elem = location;
    this.elem.innerHTML = this.letter.toUpperCase();
    this.state = KeyState.INACTIVE;
    this.stroke = new Stroke(this.letter);
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
        this.elem.innerHTML = this.letter.toUpperCase();
        this.stroke = new Stroke(this.letter);
    }
    
}