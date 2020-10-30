// Program to print no is even or odd or prime

var no = prompt("Please Enter a No TO print even or odd or prime:- ")
document.write("This Program will print if no is even or odd or prime (1 to " + no + ")")
document.write("<br>")
no = parseInt(no)
var i = 0 
var result

function checkPrime(no){
    var j;
    if(no == 1){
        return false
    }
    for(j = 2 ; j < no  ; j++){
        if(no % j == 0){
            return false
        }   
        
    }
    return true
}

for(i = 1 ; i <= no ; i++){

    if(i % 2 == 0){
        
        result = checkPrime(i)
        if(result){
            document.write(i + " is even and prime <br>")                
        }
        else {
            document.write(i + " is even <br>")                
        }
    }
    else {
       
        result = checkPrime(i)
        if(result){
            document.write(i + " is Odd and prime <br>")                
        }
        else {
            document.write(i + " is Odd <br>")                
        }
    }
}