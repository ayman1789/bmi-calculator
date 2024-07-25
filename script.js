document.getElementById('bmi-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let height = parseFloat(document.getElementById('height').value) / 100;
    let weight = parseFloat(document.getElementById('weight').value);
    
    let bmi = weight / (height * height);
    
    let resultText = `Your BMI is ${bmi.toFixed(2)}.`;
    
    document.getElementById('result').textContent = resultText;
});
