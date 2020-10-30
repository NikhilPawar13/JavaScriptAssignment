// Program To print fibonacci series
function fibonacci(no){
    var n1 = 0, n2 = 1, nextTerm;
    var i;

    for(i = 0 ; i <= no ; i++){
        console.log(n1 + " ")
        document.write(n1 + "<br>")
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm
    }
}



var no = parseInt(prompt("Enter the no of Fibinacci terms you want to Print:-"))
document.write("Program to write fibinacci series first " + no + " terms <br>")
fibonacci(no)