function showBlockMain(){
    hide();
    document.getElementById("calc").style.display = "block";
    document.getElementById("change").innerHTML = "Scientific Calculator"  
}
function showBlocktemp() {
    hide();
    document.getElementById("tempcalc").style.display = "flex";
    document.getElementById("change").innerHTML = "Temperature Converter"
}
function showBlockage() {
    hide();
    document.getElementById("agecalc").style.display = "flex";
    document.getElementById("change").innerHTML = "Age Calculator"
}
function showBlocklength() {
    hide();
    document.getElementById("lencalc").style.display = "flex";
    document.getElementById("change").innerHTML = "Length Converter"
}
function showBlockbmi() {
    hide();
    document.getElementById("bmicalc").style.display = "flex";
    document.getElementById("change").innerHTML = "BMI Calculator"
}
function hide() {
    document.getElementById("bmicalc").style.display = "none";
    document.getElementById("agecalc").style.display = "none";
    document.getElementById("tempcalc").style.display = "none";
    document.getElementById("lencalc").style.display = "none";
    document.getElementById("calc").style.display = "none";
}
