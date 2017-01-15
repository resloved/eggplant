function Key(letter) {
    
    this.letter = letter;
    this.code = keyToCode(letter);
    this.state = KeyState.INACTIVE;
    
}