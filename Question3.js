// Write a Javascript program to print pattern


var no = prompt("Please Enter a No To print no of lines Pattern:- ")
document.write("This program will print " + no + " Lines of pattern <br>")

var i;
var j;
no = parseInt(no)

for(i = 1 ; i <= no ; i++){
    for(j = i ; j <= no ;j++){
        document.write("* ")
    }
    document.write("<br>")
}