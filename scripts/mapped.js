function Mapped() {
    
    this.toCompare = []
    
    this.update = function(active) {
        for (var i = 0; i < this.toCompare; i++) {
            this.toCompare[i].compare(active);
        }
    }

}