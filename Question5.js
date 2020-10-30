// This program makes first character to Uppercase character in given String 

function capitalize(data){
    var i;
    var flag = true;
    var newString = ""
    for( i = 0 ; i < data.length ; i++){
        if(flag == true){
            newString = newString +  data.charAt(i).toUpperCase();
            flag = false
        }
        else {
            newString = newString + data.charAt(i);
        }

        if(data.charAt(i) == ' '){
            flag = true
        }
    }
    return newString
}


document.write("This program makes first character to Uppercase character in given String <br>")
data = "hi from skillsanta"
document.write(capitalize(data))
console.log(capitalize(data))