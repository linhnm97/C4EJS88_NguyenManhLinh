weight= Number(prompt("Enter your weight in kg"));
height= Number(prompt("Enter your height in cm"));
BMI = Math.ceil(weight / Math.pow(height /100,2));
alert ("Your BMI is "+ BMI);
if (BMI < 16) {
    alert("You are Severely underweight");
} else if (BMI >= 16 && BMI < 18.5) {
    alert("You are Underweight");
} else if (BMI >= 18.5 && BMI < 25) {
    alert("You are Normal");
} else if (BMI >= 25 && BMI < 30) {
    alert("You are Overweight");
} else {
    alert("You are Obese");
}
