document.getElementById('bmiForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const errorElement = document.getElementById('error');
    
    // Validate that both fields are filled
    if (!height || !weight) {
        errorElement.textContent = 'لطفا هر دو فیلد قد و وزن را پر کنید.';
        errorElement.style.display = 'block';
        return;
    }

    // Validate that height is above 30 cm and weight is above 3 kg
    if (height < 30 || weight < 3) {
        errorElement.textContent = 'لطفا قد را بیش از ۳۰ سانتی‌متر و وزن را بیش از ۳ کیلوگرم وارد کنید.';
        errorElement.style.display = 'block';
        return;
    }
        errorElement.style.display = 'none';

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    const resultElement = document.getElementById('result');
    const resultTextElement = document.getElementById('resultText');
    const bmiCategoryElement = document.getElementById('bmiCategory');

    // Determine BMI category and set color
    let color;
    if (bmi < 18.5) {
        bmiCategoryElement.textContent = "کمبود وزن";
        color = "#FFAA00"; // نارنجی
    } else if (bmi < 24.9) {
        bmiCategoryElement.textContent = "وزن نرمال";
        color = "#00FF00"; // سبز
    } else if (bmi < 29.9) {
        bmiCategoryElement.textContent = "اضافه وزن";
        color = "#FFD700"; // طلایی
    } else {
        bmiCategoryElement.textContent = "چاقی";
        color = "#FF0000"; // قرمز
    }

    // Set the BMI value with color using innerHTML
    resultTextElement.innerHTML = `شاخص توده بدنی (BMI) شما: <span style="color: ${color}">${bmi}</span> - `;
    bmiCategoryElement.style.color = color;

    // Show the result section
    resultElement.style.display = 'block'; // Make sure the result section is visible
});

document.querySelector('button[type="button"]').addEventListener('click', () => {
    document.getElementById('height').value = '';
    document.getElementById('weight').value = '';

    // Reset result elements
    const resultElement = document.getElementById('result');
    const resultTextElement = document.getElementById('resultText');
    const bmiCategoryElement = document.getElementById('bmiCategory');
    const errorElement = document.getElementById('error');

    resultTextElement.innerHTML = ''; // Reset innerHTML to empty
    bmiCategoryElement.textContent = ''; 
    bmiCategoryElement.style.color = ''; 

    // Hide the result section and error message
    resultElement.style.display = 'none'; 
    errorElement.style.display = 'none'; 
});
