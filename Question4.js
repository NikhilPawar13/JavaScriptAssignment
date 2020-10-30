// Function to hide your email

document.write("This Program will hide your email <br>")
document.write("Original Email id:- eddygrant@example.com ")
var myEmailId =  "eddygrant@example.com";

function hideCharacterFromEmail(email){

    var prefix= email.substring(0, email .lastIndexOf("@"));
    var postfix= email.substring(email .lastIndexOf("@"));
    var half = prefix.length / 2;
    var hidechar = "";
    
    for(var i = 0; i < prefix.length; i++){
        if(i <= half - 1) {  
            hidechar = hidechar + prefix[i].toString();
        }
        else {
            hidechar = hidechar + "*";
        }
    }
    hidechar = hidechar +postfix;
    return hidechar
}


console.log(hideCharacterFromEmail(myEmailId))
document.write(hideCharacterFromEmail(myEmailId))