function celtofah(){
    var cTemp = document.getElementById("tempincel").value();
    var cToFahr = cTemp*9/5+32;
    document.getElementById("anscel").innerHTML = cToFahr;
}
function fahtocel(){
    var fTemp = document.getElementById("tempinfah").value();
    var Fahrtoc = (fTemp-32)*5/9+32;
    document.getElementById("ansfah").innerHTML
}

function eraseText1(){
    document.getElementById("tempincel").value = "";
    document.getElementById("anscel").innerHTML = "";
}
function eraseText2(){
    document.getElementById("tempinfah").value = "";
    document.getElementById("ansfah").innerHTML = "";
}