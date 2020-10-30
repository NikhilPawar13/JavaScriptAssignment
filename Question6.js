// This Programs truncate a string to a certain no
function truncate(data,no){
    var count = 0;
    var newString = ""
    var i

    for(i = 0; i < data.length ; i++){
        if(count == no){
            break
        }
        else {
            newString = newString + data.charAt(i)
            if(data.charAt(i) == ' '){
                count++
            }
        }
    }
    return newString
}

document.write("This Programs truncate a string to a certain no <br>")
document.write(truncate('The quick brown fox jumps over the lazy dog', 4))
console.log(truncate('The quick brown fox jumps over the lazy dog', 4))