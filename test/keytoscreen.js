function KeyToScreen () {

    this.update = function (active) {
        document.getElementById('score').innerHTML = active.toString();
    }

}