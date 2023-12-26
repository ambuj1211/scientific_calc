function convertBMI(){
    let weight = parseFloat(document.getElementById("weight").value)
    let height = parseFloat(document.getElementById("height").value)
    height = height/100;
    let bmi = weight / height**2;
    // Determine BMI classification
    let classification = "";
    if (bmi < 18.5) {
        classification = "Slim";
    } else if (bmi >= 18.5 && bmi < 25) {
        classification = "Normal";
    } else {
        classification = "Overweight";
    }
    document.getElementById("BMIxyz").style.display = "block";
    document.getElementById("BMIres").textContent = classification;

}

    
    