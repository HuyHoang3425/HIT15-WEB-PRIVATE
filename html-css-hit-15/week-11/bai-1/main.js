button = document.querySelector(".card_btn");
let a = document.querySelector(".weight");
let b = document.querySelector(".height");
let content = document.querySelector(".container_notification");
console.log(content);

function tinhToan()
{
    const weight = parseFloat(a.value); 
    const height = parseFloat(b.value);
    const bmi = weight/(height * height);
    const result = bmi.toFixed(2);
    console.log(weight);
    console.log(height);
    if(bmi < 18.5)
    {
        content.innerHTML = `BMI: ${result} Thiếu cân`;
    }
    else if(bmi >= 18.5 && bmi < 24.9)
    {
        content.innerHTML = `BMI: ${result} Bình thường`;
    }
    else if(bmi >= 25 && bmi < 29.9)
    {
        content.innerHTML = `BMI: ${result} Béo phì cấp độ 1`;
    }
    else if(bmi >= 30 && bmi < 34.9)
    {
        content.innerHTML = `BMI: ${result} Béo phì cấp độ 2`;
    }
    else if(bmi >= 40)
    {
        content.innerHTML = `BMI: ${result} Béo phì cấp độ 3 (Nguy hiểm)`;
    }
    else{
        content.innerHTML = `Bạn vui lòng nhập chính xác ^^`;
    }
}

button.addEventListener("click",tinhToan);






