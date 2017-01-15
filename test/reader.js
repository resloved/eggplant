function Reader() {
    
    Mapped.call(this);
    
    this.update = function (active) {
        var toPost = "";
        for (var i = 0; i < active.length; i++) {
            toPost += codeToKey(active[i]);
        }
        document.getElementById("test").innerHTML = toPost;
    }
}