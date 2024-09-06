// Start: DOM Element Selection
const $ = document;
const weightInput = $.querySelector('#weight');
const heightInput = $.querySelector('#height');
const weightVal = $.querySelector('#weight-val');
const heightVal = $.querySelector('#height-val');
const bmiResult = $.querySelector('#result');
const categoryElem = $.querySelector('#category');
const warningElem = $.querySelector('#warning'); 
const resultGroup = $.querySelector('.result-group');
const resetBtn = $.querySelector('#reset-btn');
// End: DOM Element Selection

// Start: Function to Show Result Group and Reset Button
function showResults() {
    resultGroup.style.display = 'block';
    resetBtn.style.display = 'block'; // Show reset button
}
// End: Function to Show Result Group and Reset Button

// Start: Function to Update BMI Info
function updateBMIInfo(weight, height) {
    weightVal.innerHTML = weight;
    heightVal.innerHTML = height;

    const bmiValue = (weight / Math.pow(height / 100, 2)).toFixed(1);

    // Start: Check for Height and Weight Warning
    if (height < 10 || weight < 2) {
        warningElem.innerHTML = "Height should be at least (10 cm) and weight should be at least (2 kg)";
        warningElem.style.display = "block";
        bmiResult.innerHTML = ""; // مخفی کردن نتیجه BMI
        categoryElem.innerHTML = ""; // مخفی کردن دسته‌بندی
    } else {
        warningElem.style.display = "none"; // مخفی کردن هشدار
        bmiResult.innerHTML = bmiValue;

        const categories = {
            underweight: { text: 'UnderWeight', color: '#ffc44d' },
            normal: { text: 'Normal Weight', color: '#0be881' },
            overweight: { text: 'OverWeight', color: '#ff884d' },
            obese: { text: 'Obese', color: '#ff5e4d' },
        };

        let category;

        if (bmiValue < 18.5) {
            category = categories.underweight;
        } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
            category = categories.normal;
        } else if (bmiValue >= 25 && bmiValue < 29.9) {
            category = categories.overweight;
        } else {
            category = categories.obese;
        }

        categoryElem.innerHTML = category.text;
        bmiResult.style.color = category.color;
    }
    // End: Check for Height and Weight Warning
}
// End: Function to Update BMI Info

// Start: Function to Handle BMI Calculation
function bmiCalculator() {
    const { value: weight } = weightInput;
    const { value: height } = heightInput;

    if (weight > 0 && height > 0) {
        showResults(); // نمایش والد وقتی که کاربر مقداری را وارد کرد
    }

    updateBMIInfo(weight, height);
}
// End: Function to Handle BMI Calculation

// Start: Function to Reset Form
function resetForm() {
    weightInput.value = 0;
    heightInput.value = 0;
    weightVal.innerHTML = 0;
    heightVal.innerHTML = 0;
    bmiResult.innerHTML = "";
    categoryElem.innerHTML = "";
    warningElem.innerHTML = "";
    warningElem.style.display = "none";
    resultGroup.style.display = "none";
    resetBtn.style.display = 'none'; // Hide reset button
}
// End: Function to Reset Form

// Start: Event Listeners
weightInput.addEventListener('input', bmiCalculator);
heightInput.addEventListener('input', bmiCalculator);
resetBtn.addEventListener('click', resetForm);
// End: Event Listeners
