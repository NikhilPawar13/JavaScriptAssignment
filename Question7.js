// A JavaScript function to find a word within a string
function findWordInString(data,word){
    if(word.lemgth == 0){
        return 0;
    }
    else {
        var i;
        var result = 0        
        for(i = 0 ; i < data.length ; i++){
            var count = 0
            var temp = 0 
            if(data.charAt(i) == word.charAt(temp)){
                for(var j = i ; j < data.length || temp < word.length ; j++, temp++){
                    if(data.charAt(j) == word.charAt(temp)){
                        count++
                    }
                }
                if(count == word.length){
                    result++
                }
            }
        }
    }
    document.write(word + " was found " + result + " times <br><br>")
    console.log(word + " was found " + result + " times")
}

document.write("A JavaScript function to find a word within a string <br><br>")
document.write("Example:- <br>")
document.write('The quick brown fox' + '  =>  fox <br>')
findWordInString('The quick The brown fox', 'fox')
document.write('aa, bb, cc, dd, aa'  + '  =>  aa <br>')
findWordInString('aa, bb, cc, dd, aa', 'aa')
