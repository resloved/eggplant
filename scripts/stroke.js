function Stroke(code) {
    
    this.code = code;
    
    this.solved = function(active) {
        return (active.length === 1 && active[0] === code);
    }
    
}