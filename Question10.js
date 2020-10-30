// Program to convert upper case letters to lower case,and lower case letters to upper case

function convert(data){
    var i;
    newString =""

    for( i = 0 ; i < data.length ; i++){
        if(data.charAt(i) == data.charAt(i).toUpperCase()){
            newString = newString + data.charAt(i).toLowerCase()
        }
        else {
            newString = newString + data.charAt(i).toUpperCase()
        }
    }
    return newString
}


document.write("Convert Lower to upper and vice versa (NiKhIl  PaWaR)<br>")
document.write(convert("NiKhIl  PaWaR"))
