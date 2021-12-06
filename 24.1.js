// You are given a function, Square, that takes four parameters, a, b, c, d,
// denoting the length of the square edges.
// Using prototype properties, add a method to Square named isSquare that
// prints true if a Square object has equal edges and false if they are unequal.
function Square(a, b, c, d){
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
}

function isSquare(){
    return(this.a===this.b && this.b===this.c && this.c ===this.d)
}

Square.prototype.isSquare = isSquare;

seq= new Square(1,2,3,4);
seq2= new Square(1,1,1,1);

console.log(seq.isSquare());