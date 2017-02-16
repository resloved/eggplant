function Game(elem) {

    this.elem = elem;
    // TODO - change to within only elem
    this.tray = new Tray(document.getElementById(COMBO));

    // Contains
    // - Upcoming Combos
    // - Current Combo
    //  - Keys [Combo/Letter]

    // Whatever else is displayed in the game
    // Main should only contain keyboard and game

}
