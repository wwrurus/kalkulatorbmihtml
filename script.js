document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);

    if (isNaN(weight) || isNaN(heightCm) || heightCm <= 0) {
        document.getElementById('result').innerText = 'Proszę wprowadzić poprawne dane.';
        return;
    }

    const height = heightCm / 100;
    const bmi = weight / (height * height);

    let category = '';
    if (bmi < 18.5) {
        category = 'Niedowaga';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Prawidłowa masa ciała';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Nadwaga';
    } else {
        category = 'Otyłość';
    }

    document.getElementById('result').innerHTML = `Twoje BMI wynosi: ${bmi.toFixed(2)}<br>Kategoria: ${category}`;
});
