// Temp converter

function FahrToCels(value){
    value = parseFloat(value)
    var celsius = (value - 32) / 1.8
    return celsius
}

function CelsToFahr(value){
    value = parseFloat(value)
    var fahr = (value * 1.8) + 32
    return fahr
}


document.write("This program convert Fahe to celsius and vice versa <br>")
document.write("Fahr 72 into Celsius is:- " +  FahrToCels(72) + " <br>")
document.write("Celsius 37 into Fahr is:- " +  CelsToFahr(37) + " <br>")

