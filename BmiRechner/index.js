"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2

window.addEventListener("load", function() {
  let heightObj = document.getElementById("height");
  let weightObj = document.getElementById("weight");

  let calculateBmi = function() {
    let height = parseFloat(heightObj.value.replace(",", "."));
    let weight = parseFloat(weightObj.value);

    let bmi = weight / (height * height);
    let result = Math.round(bmi * 10) / 10;

    let resultObj = document.getElementById("result");
    resultObj.innerText = ("" + result).replace(".", ",");

    document.getElementById("weight-below").style.display = "none";
    document.getElementById("weight-normal").style.display = "none";
    document.getElementById("weight-above").style.display = "none";

    if (bmi < 18.5) {
      document.getElementById("weight-below").style.display = "block";
    } else if (bmi > 18.5 && bmi < 25) {
      document.getElementById("weight-normal").style.display = "block";
    } else if (!isNaN(bmi)) {
      document.getElementById("weight-above").style.display = "block";
    }
  };

  heightObj.addEventListener("change", calculateBmi);
  weightObj.addEventListener("change", calculateBmi);
  heightObj.addEventListener("keyup", calculateBmi);
  weightObj.addEventListener("keyup", calculateBmi);
});
