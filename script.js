function temperature(){
    //to convert celsius to farenheit
    //(cel * 9/5) + 32
    var c = document.getElementById("celsius").value;
    var f = (c * 9/5) + 32;
    document.getElementById("fahrenheit").value = f
}

function weight(){
    //to convert KGs to Pounds
    //KG * 2.2
    var kg = document.getElementById("kilo").value;
    var p = kg * 2.2
    document.getElementById("ibs").value = p
}

function distance(){
    //to convert Kms to Miles
    //Kms * 0.62137
    var kilometers = document.getElementById("km").value;
    var miles = kilometers * 0.62137
    document.getElementById("m").value = miles 
}